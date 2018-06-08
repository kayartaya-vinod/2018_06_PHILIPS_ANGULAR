import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from '../model/contact';
import { Observable } from 'rxjs';

// npm install rxjs@6 rxjs-compat@6 --save
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:5000/contacts/';
// const baseUrl = 'http://kvinod.com/old_ci/randomdata/contacts/';

const customHeaders: HttpHeaders = new HttpHeaders({
  'content-type': 'application/json',
  'accept': 'application/json',
  'authored-by': 'vinod@vinod.co'
});

// An instance of this class is created by Angular
// when a Component depends on it (via constructor).
// This instance is a singleton
@Injectable()
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getContactById(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id, { headers: customHeaders})
      .map(resp => resp as Contact);
  }

  getAllContacts(): Observable<Array<Contact>> {
    return this.http.get(baseUrl)
      .map(resp => resp as Contact[]);
  }

  addNewContact(contact: Contact): Observable<any> {
    return this.http.post(baseUrl, contact);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(baseUrl + contact.id, contact, {headers: customHeaders});
  }

  deleteContact(id: number): Observable<any>  {
    return this.http.delete(baseUrl + id);
  }
}
