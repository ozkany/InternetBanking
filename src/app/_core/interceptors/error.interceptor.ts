import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService, private alertService: AlertService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.alertService.clear();
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.authenticationService.logout();
        location.replace('/');
      }

      try {
        console.log('Api call error catch: ', err);
        this.alertService.error('Api call error: ' + err['message'] || err['error']);
      } catch {
        console.log('Api call error catch: ', err);
      }

      return throwError(err);
    }));
  }
}
