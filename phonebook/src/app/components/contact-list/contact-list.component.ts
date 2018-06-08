import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../../service/phonebook.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact> = [];

  constructor(private servce: PhonebookService) { }

  ngOnInit() {
    this.servce.getAllContacts()
      .subscribe(data => this.contacts = data);
  }


}
