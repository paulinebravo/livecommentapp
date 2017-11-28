import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventscatalogComponent } from './eventscatalog/eventscatalog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
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
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    DateTimePickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
