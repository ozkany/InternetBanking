import { Component, OnInit } from '@angular/core';
import { ApproveService } from 'src/app/_core/services/approve.service';
import { LoaderStore } from 'src/app/_core/stores/loader.store';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  transactionDetails;

  constructor(private approveService: ApproveService,
    private loaderStore: LoaderStore) { }

  ngOnInit() {

    this.approveService.tranApproveData$.subscribe(res => {

      this.transactionDetails = res['summaries'].reduce((r, a) => {
        if(r!= null && r.find(x => x.groupName == a.groupName)) {
          console.log(a.groupName);
          r.find(x => x.groupName == a.groupName).summaries.push(a);
        } else {
          r.push({ "groupName": a.groupName, "summaries":[a]});
          console.log(a.groupName);
        }

        return r;
    }, Object.create([]));
      
      console.log("res['summaries']", res['summaries'])
      console.log("this.transactionDetails", this.transactionDetails);
    });
  }

  onApprove() {
    console.log("doApprove");
    this.approveService.doApprove();
  }
}
