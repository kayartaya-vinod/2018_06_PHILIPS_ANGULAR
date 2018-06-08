import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from '../model/contact';
import { Observable } from 'rxjs';

// npm install rxjs@6 rxjs-compat@6 --save
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

// import { EventEmitter } from 'events';

// const baseUrl = 'http://localhost:5000/contacts/';
const baseUrl = 'http://kvinod.com/old_ci/randomdata/contacts/';


// An instance of this class is created by Angular
// when a Component depends on it (via constructor).
// This instance is a singleton
@Injectable()
export class PhonebookService{ // extends EventEmitter {

  constructor(private http: HttpClient) {
    // super();
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id)
      .map(resp => resp as Contact);
  }

  getAllContacts(): Observable<Array<Contact>> {
    return this.http.get(baseUrl)
      .map(resp => resp as Contact[]);
  }

  addNewContact(contact: Contact): Observable<any> {
    return this.http.post(baseUrl, contact);
      //.do(() => this.emit('added'));
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(baseUrl + contact.id, contact);
      //.do(() => this.emit('updated'));
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
      //.do(() => this.emit('deleted'));
  }

  // { count: 75 }
  count(): Observable<any> {
    return this.http.get(baseUrl+'count');
    // return this.getAllContacts().map(array => ({ count: array.length }));
  }
}
