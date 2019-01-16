import { Component } from '@angular/core';
import { LoaderStore } from './_core/stores/loader.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InternetBanking';

  constructor(public loaderStore: LoaderStore) {
    
  }

}
