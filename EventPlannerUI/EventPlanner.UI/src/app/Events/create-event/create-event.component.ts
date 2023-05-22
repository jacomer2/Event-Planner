import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event-model/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  addEventRequest: Event = {
    id: '',
    name: '',
    description: '',
    date: '',
    street: '',
    city: '',
    state: '',
    zipcode: 0,
    tasks: []
  }


  constructor(private eventsService: EventsService, private router: Router) { }

  addEvent() {
    this.eventsService.addEvent(this.addEventRequest)
    .subscribe({
      next: (event) => {
        this.router.navigate(['dashboard']);
      }
    });
  }

}
