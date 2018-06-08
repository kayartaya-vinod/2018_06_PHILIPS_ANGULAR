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
  token: string;

  constructor(private servce: PhonebookService) { }

  initContacts() {
    this.servce.getAllContacts()
      .subscribe(data => this.contacts = data);
  }
  ngOnInit() {
    this.initContacts();

    // this.servce.on('deleted', () => this.initContacts());
  }

  deleteContact(id) {
    if (confirm('Are you sure to delete this contact?')) {
      this.servce.deleteContact(id).subscribe();
    }
  }

}
