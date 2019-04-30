import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CommonFacade, CommonActions } from '@core/facades/common.facade';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private commonFacade: CommonFacade, private injector: Injector) { }

  handleError(error) {
    console.error('GlobalError: ', error);

    const location = this.injector.get(LocationStrategy);

    const message = error.message ? error.message : error.toString();
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    StackTrace.fromError(error).then(stackframes => {
      const stackString = stackframes
        .splice(0, 20)
        .map(function (sf) {
          return sf.toString();
        }).join('\\n\\n');
      // log on the server
      // loggingService.log({ message, url, stack: stackString });
      this.commonFacade.dispatch(new CommonActions.GlobalError({ message, url, stack: stackString }));
    });

    // throw error;
  }
}
