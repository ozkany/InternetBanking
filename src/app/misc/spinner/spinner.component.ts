import { Component, OnInit } from '@angular/core';
import { CommonStore } from 'src/app/_core/store/common/common.store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState, AppState } from 'src/app/_core/store';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  authState$: Observable<AuthState.State>;

  constructor(public commonStore: CommonStore, private store: Store<AppState>) { }

  ngOnInit() {
    this.authState$ = this.store.select('auth');
  }

}
