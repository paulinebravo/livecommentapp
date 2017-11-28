import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventscatalogComponent } from './eventscatalog/eventscatalog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsaddComponent } from './eventsadd/eventsadd.component';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { PostcommentComponent } from './postcomment/postcomment.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    EventscatalogComponent,
    EventsaddComponent,
    PostcommentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,

  ],

  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    FormsModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
