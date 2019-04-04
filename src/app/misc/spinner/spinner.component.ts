import { Component, OnInit } from '@angular/core';
import { CommonStore } from 'src/app/_core/store/common/common.store';
import { AuthService } from 'src/app/_core/services/auth.service';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/_core/store/app.state';
import * as fromAuth from 'src/app/_core/store/auth/auth.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  authState$: Observable<fromAuth.State>;

  constructor(public commonStore: CommonStore, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState$ = this.store.select('auth');
  }

}
