import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postmessages',
  templateUrl: './postmessages.component.html',
  styleUrls: ['./postmessages.component.css']
})
export class PostmessagesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

}
