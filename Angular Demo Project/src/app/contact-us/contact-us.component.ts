import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatacommunicateService } from "../sharedzone/datacommunicate.service";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name: any;
  email: any;
  ptype: any;
  message: any;
  validatingForm: FormGroup;
  disabledSubmitButton: boolean = true;
  @HostListener('input') oninput() {

    if (this.validatingForm.valid) {
      this.disabledSubmitButton = false;
      }
    }
  constructor(private dataservice: DatacommunicateService, private fb: FormBuilder) {
    this.validatingForm = fb.group({
      'nameForm': ['', Validators.required],
      'emailForm': ['', Validators.compose([Validators.required, Validators.email])]
  });
   }

  ngOnInit(): void {
  }
  
  sendContact(){
    const contactobj = {
      name: this.name,
      email: this.email,
      ptype: this.ptype,
      message: this.message
    };
    this.dataservice.Sendinfo(contactobj).CONTACTUS();
    alert('Your message has been sent.');
      this.validatingForm.reset();
      this.disabledSubmitButton = true;
  }
}
