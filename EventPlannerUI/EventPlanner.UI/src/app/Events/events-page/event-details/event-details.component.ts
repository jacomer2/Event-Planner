import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Event} from 'src/app/models/event-model/event.model'
import { EventsService } from 'src/app/services/events.service';
import { TodoListComponent } from './todo-list/todo-list.component';


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
    zipcode: 0,
    tasks: [{description: "stored in database", checked: false},
            {description: "checked in db", checked: true},
            {description: "third stored", checked: false}]
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
    });
    console.log("todo?");
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
