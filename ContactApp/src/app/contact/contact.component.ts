import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit {
contacts:Contact[];
contact:Contact;
first_name:String;
last_name:String;
phone_name:String;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
     .subscribe(contacts=>
       this.contacts=contacts);
  }

}
