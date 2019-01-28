import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { MockDataService as MockDataService } from './mock-data.service';
import { LoaderStore } from '../stores/loader.store';
import { environment } from 'src/environments/environment';
 
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
 
    constructor(private mockDataService : MockDataService, private loaderStore: LoaderStore) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(!environment.useMockData) { return next.handle(request); }
        
        console.log("FakeBackendInterceptor entered");
        
        this.loaderStore.isLoading.next(true);
        const logMsg = `mocking service response of (${request.url}) with === >`;

        return of(null).pipe(mergeMap(() => {
            console.log("interceptor request", request.body);
            let url = request.url;

            if(request.url.lastIndexOf("/transfer/transferapprovev2") > 0) {
                url += !!request.body.Otp ? "/confirmSms" : "/approveTran";
            }

            let foundMockResponse = this.mockDataService.jsonData.filter(d => url.lastIndexOf(d.path) > 0 && d.method == request.method).reverse()[0].data;
            console.log(logMsg, foundMockResponse);
            //this.loaderStore.isLoading.next(false);
            return of(new HttpResponse({ status: 200, body: foundMockResponse }));


            //getAccounts
            if (request.url.endsWith('/auth/token?validationType=sms') && request.method === 'PATCH') {
                this.loaderStore.isLoading.next(false);
                return of(new HttpResponse({ status: 200, body: null }));
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: null }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    //let matchedUsers = users.filter(user => { return user.id === id; });
                    //let user = matchedUsers.length ? matchedUsers[0] : null;
 
                    return of(new HttpResponse({ status: 200, body: null }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;
 
                // validation
                // let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                // if (duplicateUser) {
                //     return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                // }
 
                // // save new user
                // newUser.id = users.length + 1;
                // users.push(newUser);
                // localStorage.setItem('users', JSON.stringify(users));
 
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }
 
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    // for (let i = 0; i < users.length; i++) {
                    //     let user = users[i];
                    //     if (user.id === id) {
                    //         // delete user
                    //         users.splice(i, 1);
                    //         localStorage.setItem('users', JSON.stringify(users));
                    //         break;
                    //     }
                    // }
 
                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // pass through any requests not handled above
            return next.handle(request);
             
        }))
 
        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};