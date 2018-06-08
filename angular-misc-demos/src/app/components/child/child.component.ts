import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  author: string;

  @Input() borderColor: string = 'black';

  constructor() { 
    this.title = 'This is a child component';
    this.author = 'Vinod';
  }

  ngOnInit() {
    
  }

}
