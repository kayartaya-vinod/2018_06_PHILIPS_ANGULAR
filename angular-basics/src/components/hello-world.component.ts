// src/components/hello-world.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'myapp',
    template: '<h1>{{ message }}</h1><box></box>'
})
export class HelloWorldComponent {
    message: string;

    constructor() {
        this.message = 'Hello, World!';
    }
}