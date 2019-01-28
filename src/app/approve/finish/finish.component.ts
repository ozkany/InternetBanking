import { Component, OnInit } from '@angular/core';
import { ApproveService } from 'src/app/_core/services/approve.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(public approveService: ApproveService) { }

  ngOnInit() {
  }

}
