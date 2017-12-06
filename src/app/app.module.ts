import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventscatalogComponent } from './eventscatalog/eventscatalog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsaddComponent } from './eventsadd/eventsadd.component';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { AppRoutingModule } from './/app-routing.module';
import {HttpModule} from '@angular/http';
import { EventscataloglistComponent } from './eventscataloglist/eventscataloglist.component';
import { EventscatalogtagComponent } from './eventscatalogtag/eventscatalogtag.component';
import { PostmessagesComponent } from './postmessages/postmessages.component';
import { QuillModule } from 'ngx-quill';

import { PostmessagestexteditorComponent } from './postmessagestexteditor/postmessagestexteditor.component';





@NgModule({
  declarations: [
    AppComponent,
    EventscatalogComponent,
    EventsaddComponent,
    EventscataloglistComponent,
    EventscatalogtagComponent,
    PostmessagesComponent,
    PostmessagestexteditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    QuillModule,

  ],

  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    QuillModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
