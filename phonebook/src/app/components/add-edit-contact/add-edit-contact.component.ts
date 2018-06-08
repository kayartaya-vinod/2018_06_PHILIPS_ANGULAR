import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { PhonebookService } from '../../service/phonebook.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  contact = new Contact();
  mode: string;

  constructor(private service: PhonebookService,
    private ar: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if ('editing_contact' in this.service) {
      this.contact = this.service['editing_contact'];
      delete this.service['editing_contact'];
      this.mode = 'edit';
    }
    else {
      // get the data from the REST endpoint using url parameter
      this.ar.params.subscribe(data => {
        if ('id' in data) {
          this.mode = 'edit';
          this.service.getContactById(data['id'])
            .subscribe(contact => this.contact = contact);
        }
        else {
          this.mode = 'add';
        }
      });
    }
  }

  save(): void {
    const method = this.mode == 'edit' ? 'updateContact' : 'addNewContact';
    this.service[method](this.contact)
      .subscribe(
        contact => this.router.navigate(['/contact-details', contact.id]));
  }

}
