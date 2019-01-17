import { Component, OnInit } from '@angular/core';
import { LoaderStore } from 'src/app/_core/stores/loader.store';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private loaderStore: LoaderStore, private authService: AuthService) { }

  ngOnInit() {
  }

}
