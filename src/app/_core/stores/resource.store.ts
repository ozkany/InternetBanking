import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tapLog } from '../extensions/tap-log';
import { PaymentService } from '../services/payment.service';
import { LastPaymentsDetail } from '../models/payment-activity.model';

@Injectable({
    providedIn: 'root'
})
export class ResourceStore {

    public resources$ = new BehaviorSubject<any>(undefined);
    public get resourcesData() { return this.resources$.getValue(); }

    constructor() {

    }

    getResource(resourceCode: string) {
        const data = this.resourcesData;

        if (!!data && !!data[resourceCode]) {
            return data[resourceCode];
        } else {
            return resourceCode;
        }
    }

}
