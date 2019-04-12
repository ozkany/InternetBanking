import { Component, OnInit } from '@angular/core';
import { ApproveFacade } from '@core/facades/approve.facade';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private approveFacade: ApproveFacade) { }

  ngOnInit() {
  }

}
