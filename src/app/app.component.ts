import { Component, OnInit } from '@angular/core';
import { CommonStore } from './_core/store/common/common.store';
import { ActivatedRoute, Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InternetBanking';

  constructor(public commonStore: CommonStore, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      ,filter((route) => route.outlet === 'primary')
      ,mergeMap((route) => route.data)
      ,map((data) => {
        if ( data.title ) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            return acc + " -- " + frag;
          });
        }
      }))
      .subscribe((pathString) => this.title = pathString);
  }

}
