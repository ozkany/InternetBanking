import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/_core/store/app.state';
import { switchMap, take, first, flatMap } from 'rxjs/operators';
import * as fromAuth from 'src/app/_core/store/auth/auth.reducers';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return this.store.select('auth')
    .pipe(
      take(1),
      switchMap((authState: fromAuth.State) => {
        const authReq = req.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'Accept-Language': 'TR',
            'X-Client-Id': '1969abe2b62c3a4a',
            'X-LoadTestReferer': '1',
            'X-Token': authState.tokenStr
          }
        });

        return next.handle(authReq);
    }));

  }
}

