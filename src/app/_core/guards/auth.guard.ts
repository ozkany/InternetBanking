import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/_core/store/app.state';
import * as fromAuth from 'src/app/_core/store/auth/auth.reducers';
import { pipe } from '@angular/core/src/render3';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private store: Store<fromApp.AppState>
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isAuthenticated: boolean = false;
        this.store.select('auth').pipe(take(1)).subscribe(res => {
            isAuthenticated = res.authenticated;
        });
        // if (this.authService.isLoggedIn) {
        //     console.log("AuthGuard loggedin");
        //     return true;
        // }

        if(isAuthenticated) {
            console.log("AuthGuard loggedin");
            return true;
        } else {
            console.log("AuthGuard NOT loggedin. Redirecting to login page...");
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}