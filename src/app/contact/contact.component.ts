import { Component, OnInit } from '@angular/core';
import { ContactUsers } from '../models/ContactUsers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactUser: ContactUsers;


  constructor() {
  this.contactUser = new ContactUsers('', '', '', '');
  }

  ngOnInit() {
  }
  onSubmit(form) {
    form.reset();
    console.log('evento lanzado');
    console.log(this.contactUser);
  }
}
