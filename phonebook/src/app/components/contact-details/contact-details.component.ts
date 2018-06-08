import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../../service/phonebook.service';
import { Contact } from '../../model/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  today = new Date();

  constructor(
    private service: PhonebookService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ar.params.subscribe(data => {
      let id = data['id'];
      if (isNaN(id)) {
        this.router.navigate(['/']);
        return;
      }
      this.service.getContactById(id)
        .subscribe(
          data => this.contact = data,
          err => this.router.navigate(['/'])
        );
    });
  }

  deleteContact() {
    if (confirm('Are you sure to delete this?')) {
      this.service.deleteContact(this.contact.id)
        .subscribe(() => this.router.navigate(['/']));
    }
  }

  storeContact() {
    // adding a new property called "editing_contact" in service
    this.service['editing_contact'] = this.contact;
  }
}
