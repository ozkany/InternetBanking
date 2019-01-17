import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AuthToken } from '../models/auth-token.model';
import { environment } from 'src/environments/environment';
import { tapLog } from '../extensions/tap-log';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _authToken$ = new BehaviorSubject<AuthToken>(undefined);
    public readonly authToken$ = this._authToken$.asObservable();

    private _user$ = new BehaviorSubject<User>(undefined);
    public readonly user$: Observable<User> = this._user$.asObservable();
    public get currentUser(): User { return this._user$.value; }

    private _isUserLoggedIn$ = new BehaviorSubject(false);
    public readonly isUserLoggedIn$ = this._isUserLoggedIn$.asObservable();
    public get isUserLoggedIn() : boolean { return this._isUserLoggedIn$.value }

    constructor(private http: HttpClient) {
    }

    

    private _tokenStr = "";
    public get tokenStr(): string {
        return this._tokenStr;
    }

    createToken() {
        let request = {
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
            .pipe(tapLog(),
                tap(tokenResponse => {
                this._authToken$.next(tokenResponse);
                this._tokenStr = tokenResponse.token;
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
                this._isUserLoggedIn$.next(true);
                return true;
            }));
    }

    logout() {
        this._tokenStr = "";
        this._isUserLoggedIn$.next(false);
        this._authToken$.next(null);
        this._user$.next(null);
    }
}