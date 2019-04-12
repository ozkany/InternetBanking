import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    //let res: any;

    return next.handle(req)
      .pipe(
        tap(
          event => {
            ok = event instanceof HttpResponse ? 'succeeded' : ''
            //if (ok) res = event;
          },
          error => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
          //this.messenger.add(msg);
          //console.log("http call", msg);
          //  console.log("request", req);
          //  console.log("response", res);
        })
      );
  }
}
