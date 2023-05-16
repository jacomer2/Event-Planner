import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/models/event-model/event.model';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  events: Event[] = [

  ];
  constructor() {  }
  ngOnInit(): void {

  }

}

// {
//   name: "O'brien Wedding",
//   description: "This a wedding",
//   date: "4/12/24",
//   street: "123 Pleasant Street",
//   city: "Morgantown",
//   state: "WV",
//   zipcode: 26505
// },
// {
//   name: "Johnson Wedding",
//   description: "This a wedding",
//   date: "4/15/24",
//   street: "124 Pleasant Street",
//   city: "Morgantown",
//   state: "WV",
//   zipcode: 26505
// }
