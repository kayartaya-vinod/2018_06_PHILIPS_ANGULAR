import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorldComponent } from './components/hello-world.component';
import { WelcomeComponent } from './components/welcome.component';
import { SecondModule } from './second.module';

@NgModule({
    declarations: [
        // all components, pipes, directives of this module are listed here
        HelloWorldComponent,
        WelcomeComponent
    ],
    providers: [
        // all injectables of this module are listed here
    ],
    imports: [
        // all modules that this module depends on are listed here
        BrowserModule,
        SecondModule
    ],
    exports: [
        // all components/pipes/directives of this module that needs to accessed by another module are listed here
    ],
    bootstrap: [
        // all components of this module that can be directly used in the index.html (at the time of bootstrapping)
        HelloWorldComponent,
    ]
})
export class MyModule {
}
