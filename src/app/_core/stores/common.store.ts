import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonStore {

  public pageTitle: string;

  constructor() {

  }


}
