import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderStore } from '../stores/loader.store';
import { LoaderInterceptor } from './loader.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { fakeBackendProvider } from '../mocking/mock-backend.interceptor';

@NgModule({
  providers: [
    LoaderStore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    fakeBackendProvider
  ]
})
export class InterceptorModule {
}

//export * from '../stores/loader.store';
