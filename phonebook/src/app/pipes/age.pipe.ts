import { Pipe, PipeTransform } from '@angular/core';

// Usage:
// <p>{{ contact.dob | age }} </p>
// <p>{{ contact.dob | age : 1 }} </p>
// <p>{{ contact.dob | age : 2 }} </p>
// <p>{{ contact.dob | age : 3 }} </p>

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag: number = 1): string {
    let dt = new Date(dob);
    let diff = Date.now() - dt.getTime();
    let dt1 = new Date(diff);
    let y = dt1.getFullYear() - 1970,
      m = dt1.getMonth(),
      d = dt1.getDate();

    switch (flag) {
      case 3:
        return `${y} years ${m} months and ${d} days`;
      case 2:
        return `${y} years and ${m} months`;
      default:
        return `${y} years`;
    }
  }

}
