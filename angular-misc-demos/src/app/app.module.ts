import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';

import { FormsModule } from '@angular/forms';
import { BoxDirective } from './directives/box.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
