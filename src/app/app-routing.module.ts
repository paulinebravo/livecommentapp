import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventscatalogComponent } from './eventscatalog/eventscatalog.component';
import {PostmessagesComponent} from './postmessages/postmessages.component';

const routes: Routes = [
  { path: ' ', component: EventscatalogComponent },
  { path: 'postmessages', component: PostmessagesComponent },
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
/* FAIRE LES ROUTES  */
