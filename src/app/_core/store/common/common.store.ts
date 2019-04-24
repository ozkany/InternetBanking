import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonStore {

  public isLoading$ = new BehaviorSubject(false);

  public resources$ = new BehaviorSubject<any>(undefined);

  public localeAcceptLanguage = 'EN';
  public localeNgId = 'en';

  public get resources() { return this.resources$.getValue(); }

  constructor() {

  }

  getResource(resourceCode: string) {
    const data = this.resources;

    if (!!data && !!data[resourceCode]) {
      return data[resourceCode];
    } else {
      return resourceCode;
    }
  }

}
