import { Component, OnInit } from '@angular/core';
import { ApproveFacade } from 'src/app/_core/facades/approve.facade';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(public approveFacade: ApproveFacade) { }

  ngOnInit() {
  }

}
