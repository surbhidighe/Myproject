import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DatacommunicateService {
  private data: any;
  private dataObserve = new BehaviorSubject({});
  dataserviceShared = this.dataObserve.asObservable();

  constructor(public route: Router) { 
    this.dataserviceShared.subscribe(d => this.data = d);
  }

  Sendinfo(data: any){
    return {
      CONTACTUS: () => {
        this.dataObserve.next(data);
        // this.route.navigate(['contact-response'])
      } 
    }
  }
}
