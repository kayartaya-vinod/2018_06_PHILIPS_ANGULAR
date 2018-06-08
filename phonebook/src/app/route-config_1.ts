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
        path: 'contacts',
        component: ContactListComponent,
        children: [
            {
                path: ':id',
                component: ContactDetailsComponent,
                children: [
                    {
                        path: 'edit',
                        component: AddEditContactComponent
                    }
                ]
            },
            {
                path: 'add',
                component: AddEditContactComponent
            },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]