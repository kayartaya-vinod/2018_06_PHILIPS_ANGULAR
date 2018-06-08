import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, token: string): Array<any> {
    if (!value) return [];

    return value.filter(c => this.match(c, token));
  }

  match(obj, token): boolean {
    var re = new RegExp(token, 'i');
    for (let prop in obj) {
      if (prop == 'picture') continue;
      if (re.test(obj[prop])) return true;
    }
    return false;
  }

}
