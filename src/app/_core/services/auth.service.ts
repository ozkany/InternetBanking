import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { AuthTokenObj } from '../models/auth-token.model';
import { environment } from 'src/environments/environment';
import { tapLog } from '../extensions/tap-log';
import * as fromApp from 'src/app/_core/store/app.state';
import * as AuthActions from 'src/app/_core/store/auth/auth.actions'
import { CommonStore } from '../store/common/common.store';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient,
        private commonStore: CommonStore,
        private store: Store<fromApp.AppState>) {
        if (environment.useMockData) {
            // this._isLoggedIn$.next(true);
            // this.store.dispatch(new AuthActions.Login())
        }
    }

    createToken() {
        const request = {
            'appVersion': '1.0.0',
            'device': {
                'make': 'Xiaomi',
                'model': 'MI 6',
                'os': {
                    'family': 'Android',
                    'version': '26'
                }
            },
            'localeVersion': ''
        };

        return this.http.post<AuthTokenObj>(`${environment.apiUrl}/auth/token`, request)
            .pipe(tapLog('createToken'),
                tap(tokenResponse => {
                    this.commonStore.resources$.next(tokenResponse.locale.data);
                    tokenResponse.locale.data = null;
                }));
    }

    login(username: string, password: string) {
        const request = {
            'grantType': 'userName',
            'identifier': username,
            'secret': password
        };

        return this.http.patch<User>(`${environment.apiUrl}/auth/token`, request)
            .pipe(tap(user => {
                return user;
            }));
    }

    createOtp() {
        return this.http.post(`${environment.apiUrl}/auth/otp`, null);
    }

    validateOtp(smscode: string) {
        return this.http.patch(`${environment.apiUrl}/auth/token?validationType=sms`, { 'code': smscode })
            .pipe(map(res => {
                return true;
            }));
    }

    logout() {
        this.store.dispatch(new AuthActions.Logout());
    }
}
