import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AuthToken } from '../models/auth-token.model';
import { environment } from 'src/environments/environment';
import { tapLog } from '../extensions/tap-log';
import { ResourceStore } from '../stores/resource.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _authToken$ = new BehaviorSubject<AuthToken>(undefined);
    public readonly authToken$ = this._authToken$.asObservable();

    private _user$ = new BehaviorSubject<User>(undefined);
    public readonly user$: Observable<User> = this._user$.asObservable();
    public get currentUser(): User { return this._user$.value; }

    private _isLoggedIn$ = new BehaviorSubject(false);
    public readonly isLoggedIn$ = this._isLoggedIn$.asObservable().pipe(tapLog("isLoggedIn"));
    public get isLoggedIn() : boolean { return this._isLoggedIn$.value }

    private _tokenStr = "";
    public get tokenStr(): string {
        return this._tokenStr;
    }

    constructor(private http: HttpClient, private resourceStore: ResourceStore) {
        if(environment.useMockData) this._isLoggedIn$.next(true);
    }

    createToken() {
        const request = {
            "appVersion": "1.0.0",
            "device": {
                "make": "Xiaomi",
                "model": "MI 6",
                "os": {
                    "family": "Android",
                    "version": "26"
                }
            },
            "localeVersion": ""
        };

        return this.http.post<AuthToken>(`${environment.apiUrl}/auth/token`, request)
            .pipe(tapLog("createToken"),
                tap(tokenResponse => {
                this._authToken$.next(tokenResponse);
                this._tokenStr = tokenResponse.token;
                
                this.resourceStore.resources$.next(tokenResponse.locale.data);
            }));
    }

    login(username: string, password: string) {
        let request = {
            "grantType": "userName",
            "identifier": username,
            "secret": password
        };

        return this.http.patch<User>(`${environment.apiUrl}/auth/token`, request)
            .pipe(tap(user => {
                if (user && user.userId) {
                    this._user$.next(user);
                }

                return user;
            }));
    }

    createOtp() {
        return this.http.post(`${environment.apiUrl}/auth/otp`, null);
    }

    validateOtp(smscode: string) {
        return this.http.patch(`${environment.apiUrl}/auth/token?validationType=sms`, { "code": smscode })
            .pipe(map(res => {
                this._isLoggedIn$.next(true);
                return true;
            }));
    }

    logout() {
        this._tokenStr = "";
        this._isLoggedIn$.next(false);
        this._authToken$.next(null);
        this._user$.next(null);
    }
}