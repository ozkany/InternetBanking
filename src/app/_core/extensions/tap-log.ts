import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export function tapLog(name?: string) {
  return (source$: Observable<any>) =>
    source$.pipe(tap(
      res => {
        if (environment.debugObservables) {
          console.log(`tapLog (${name}) : res =>`, res);
        }
      },
      err => {
        if (environment.debugObservables) {
          console.log(`tapLog (${name}) : error =>`, err);
        }
      },
      () => {
        if (environment.debugObservables) {
          console.log(`tapLog (${name}) : complete`);
        }
      }
    ));
}