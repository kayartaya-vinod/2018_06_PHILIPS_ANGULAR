import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements OnInit {

  @Input()
  color: string = 'black';

  constructor(private elr: ElementRef) { 
  }

  ngOnInit(): void {
    this.elr.nativeElement.style.border = `2px solid ${this.color}`;
    this.elr.nativeElement.style.marign = '5px';
  }

}
