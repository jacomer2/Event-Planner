import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Event} from 'src/app/models/event-model/event.model'
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
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

  constructor(private route: ActivatedRoute, private eventsService: EventsService,  private router: Router) { }

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

  deleteEvent(id: string) {
    this.eventsService.deleteEvent(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['dashboard']);
      }
    });
  }

}
