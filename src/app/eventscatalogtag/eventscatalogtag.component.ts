import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EVENT} from '../mock-event';

@Component({
  selector: 'app-eventscatalogtag',
  templateUrl: './eventscatalogtag.component.html',
  styleUrls: ['./eventscatalogtag.component.css']
})
export class EventscatalogtagComponent implements OnInit {
  hero: Event = {
    id: 1,
    name: 'Football match'
  };
  event = EVENT;

  constructor() { }

  ngOnInit() {
  }

}
