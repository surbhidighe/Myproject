import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from "angular-bootstrap-md";
import { DatacommunicateService } from "../sharedzone/datacommunicate.service";
@Component({
  selector: 'app-contact-response',
  templateUrl: './contact-response.component.html',
  styleUrls: ['./contact-response.component.scss']
})
export class ContactResponseComponent implements OnInit {
  @ViewChild('contactinfo', { static: true }) contactinfo: ModalDirective;
  data: any;
  constructor(public dataservice: DatacommunicateService) {
    this.dataservice.dataserviceShared.subscribe(d => this.data = d)
  }


  ngOnInit(): void {
    // this.render = this.data
  }
  // ngAfterViewInit(){
  //   this.contactinfo.show()
  // }

}
