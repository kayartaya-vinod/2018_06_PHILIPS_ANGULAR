import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';


// usage: {{ contact | fullname }}

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): string {
    if(!contact) return null;
    
    let title = contact.gender == 'Male' ? 'Mr.' : 'Ms.';
    let fname = contact.first_name;
    let lname = contact.last_name;
    return title + fname + ' ' + lname;
  }

}
