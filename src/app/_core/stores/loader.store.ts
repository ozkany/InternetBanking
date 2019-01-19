import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderStore {
    public isLoading = new BehaviorSubject(true);

    constructor() {
        //this.isLoading.subscribe(a => console.log("LoaderStore.isLoading =>", a, new Date().toJSON()));
    }
}


