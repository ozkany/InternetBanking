import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs";
import { AuthToken } from '../models/auth-token.model';
import { User } from '../models/user.model';
import { tapLog } from '../extensions/tap-log';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private _token$ = new BehaviorSubject<AuthToken>(undefined);
  public readonly authToken$ = this._token$.asObservable().pipe(tapLog("authToken$"));

  private _user$ = new BehaviorSubject<User>(undefined);
  public readonly user$: Observable<User> = this._user$.asObservable().pipe(tapLog("user$"));
  
  constructor() {

  }


}
