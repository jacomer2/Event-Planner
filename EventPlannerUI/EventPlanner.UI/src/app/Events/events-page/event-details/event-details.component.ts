import { Component } from '@angular/core';
import {Event} from 'src/app/models/event-model/event.model'


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  event: Event = {
    name: "Johnson Wedding",
    description: 'Save the date',
    date: '4/24/23',
    street: '124 Pleasant Street',
    city: 'Morgantown',
    state: 'WV',
    zipcode: 26505
  }
}
