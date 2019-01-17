import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export function tapLog(name?: string) {
  return (source$: Observable<any>) =>
    source$.pipe(tap(
      res => {
        if(environment.debugObservables) { 
          console.log(`Observable log (res) : ${name}`, res)
        }
      },
      err => {
        if(environment.debugObservables) { 
          console.log(`Observable log (error) : ${name}`, err)
        }
      },
      () => {
        if(environment.debugObservables) { 
          console.log(`Observable log (complete) : ${name}`)
        }
      }
    ));
}