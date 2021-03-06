// src/app/route-config.ts
import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';

export const routeConfig:Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contact-list'
    },
    {
        path: 'contact-list',
        component: ContactListComponent
    },
    {
        path: 'contact-details/:id',
        component: ContactDetailsComponent
    },
    {
        path: 'edit-contact/:id',
        component: AddEditContactComponent
    },
    {
        path: 'add-contact',
        component: AddEditContactComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]