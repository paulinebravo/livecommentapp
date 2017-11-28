import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventscatalogComponent } from './eventscatalog/eventscatalog.component';

const routes: Routes = [
  { path: 'eventscatalog', component: EventscatalogComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
/* FAIRE LES ROUTES  */
