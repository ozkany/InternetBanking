import { Component, OnInit } from '@angular/core';
import { CommonStore } from 'src/app/_core/store/common/common.store';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(public commonStore: CommonStore, public authService: AuthService) { }

  ngOnInit() {
  }

}
