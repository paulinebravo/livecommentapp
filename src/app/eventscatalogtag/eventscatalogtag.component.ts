import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EVENTS} from '../mock-event';

@Component({
  selector: 'app-eventscatalogtag',
  templateUrl: './eventscatalogtag.component.html',
  styleUrls: ['./eventscatalogtag.component.css']
})
export class EventscatalogtagComponent implements OnInit {
  events = EVENTS;

   selectedEvent: Event;


   constructor() { }

   ngOnInit() {
   }
   onSelect(event: Event): void {
     this.selectedEvent = event;
   }
 }
