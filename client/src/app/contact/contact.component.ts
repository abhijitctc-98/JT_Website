import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any;

  faFacebookMessenger = faFacebookMessenger;
  faUser = faUser;
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  
  contactForm = new FormGroup({
    studName: new FormControl(''),
    studEmailID: new FormControl(''),
    studPhone: new FormControl(''),
    studMessage: new FormControl('')
  });
  constructor() {
    console.log(this.contactForm.value);
  }
  contactSub(formData: any) {
    console.log(formData)
  }
}
