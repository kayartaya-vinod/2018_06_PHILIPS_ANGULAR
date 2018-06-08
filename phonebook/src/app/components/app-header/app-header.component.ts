import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../../service/phonebook.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  count: number;

  constructor(private service: PhonebookService) { }

  initCount(): void {
    this.service.count().subscribe(data => this.count = data.count);
  }

  ngOnInit() {
    this.initCount();
    
    // this.service.on('deleted', () => this.initCount())
      // .on('added', () => this.initCount());

  }

}
