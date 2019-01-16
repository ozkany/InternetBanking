import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept-Language': 'TR',
        'X-Client-Id': '1969abe2b62c3a4a',
        'X-LoadTestReferer': '1',
        'X-Token': this.authService.tokenStr
      }
    });

    return next.handle(authReq);
  }
}

