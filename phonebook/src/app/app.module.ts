import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhonebookService } from './service/phonebook.service';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { RouterModule } from '@angular/router';
import { routeConfig } from './route-config';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';

const appRoutingProviders: any[] = [

];

@NgModule({

  declarations: [
    AppComponent,
    AppHeaderComponent,
    ContactDetailsComponent,
    FullnamePipe,
    AgePipe,
    ContactListComponent,
    PageNotFoundComponent,
    FilterPipe,
    AddEditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig, { useHash: true })
  ],
  providers: [
    PhonebookService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
