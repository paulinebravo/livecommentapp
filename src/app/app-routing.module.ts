import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventscatalogtagComponent } from './eventscatalogtag/eventscatalogtag.component';
import {PostmessagesComponent} from './postmessages/postmessages.component';

const routes: Routes = [
  { path: 'eventscatalog', component: EventscatalogtagComponent },
  { path: 'postmessages', component: PostmessagesComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
/* FAIRE LES ROUTES  */
