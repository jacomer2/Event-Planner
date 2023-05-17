import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Event} from 'src/app/models/event-model/event.model'
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  eventDetails: Event = {
    id: '',
    name: '',
    description: '',
    date: '',
    street: '',
    city: '',
    state: '',
    zipcode: 0
  };

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          // call api
          this.eventsService.getEvent(id)
          .subscribe({
            next: (response) => {
              this.eventDetails = response;
            }
          });
        }
      }
    })
  }

  updateEvent() {
    this.eventsService.updateEvent(this.eventDetails.id, 
    this.eventDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['event-details', this.eventDetails.id]);
      }
    })
  }
}
