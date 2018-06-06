// ex05.ts
import { Person } from './ex03';
import * as $ from 'jquery';

let p1 = new Person(1, 'Vinod');
p1.print();

$("body").append("<h3>Let's have lunch</h3>");


console.log('typeof $ is', typeof $);
console.log('from ex05.ts...');