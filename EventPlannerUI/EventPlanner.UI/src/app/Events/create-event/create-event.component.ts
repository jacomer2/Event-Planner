import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event-model/event.model';
import { EventsService } from 'src/app/services/events.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  eventForm = new FormGroup ({
    name : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    description : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    date : new FormControl(''),
    street : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    city : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    state : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    zipcode : new FormControl('', Validators.compose([Validators.pattern('^[0-9]*$'), Validators.maxLength(5)]))
  });
    
  

  constructor(private eventsService: EventsService, private router: Router) { }

  addEvent() {
    this.addEventRequest.name = this.eventForm.value.name!;
    this.addEventRequest.description = this.eventForm.value.description!;
    this.addEventRequest.date = this.eventForm.value.date!;
    this.addEventRequest.street = this.eventForm.value.street!;
    this.addEventRequest.city = this.eventForm.value.city!;
    this.addEventRequest.state = this.eventForm.value.state!;
    this.addEventRequest.zipcode = +this.eventForm.value.zipcode!;



    this.eventsService.addEvent(this.addEventRequest)
    .subscribe({
      next: (event) => {
        this.router.navigate(['dashboard']);
      }
    });
  }

}
