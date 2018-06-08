import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'box',
    template: '<div class="square"></div>',
    styles: [
        `.square {
            width: 150px;
            height: 150px;
            border: 2px solid black;
        }`
    ]
})
export class BoxComponent {
}

@NgModule({
    declarations: [ BoxComponent ],
    exports: [ BoxComponent ]
})
export class SecondModule {
}