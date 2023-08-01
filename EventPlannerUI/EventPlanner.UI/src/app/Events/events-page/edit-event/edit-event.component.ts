import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    zipcode: 0,
    tasks: []
  };

  eventForm = new FormGroup ({
    name : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    description : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    date : new FormControl(''),
    street : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    city : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    state : new FormControl('', Validators.pattern('^[ a-zA-Z0-9]*$')),
    zipcode : new FormControl('', Validators.compose([Validators.pattern('^[0-9]*$'), Validators.maxLength(5)]))
  });
  
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

    this.eventDetails.name = this.eventForm.value.name!;
    this.eventDetails.description = this.eventForm.value.description!;
    this.eventDetails.date = this.eventForm.value.date!;
    this.eventDetails.street = this.eventForm.value.street!;
    this.eventDetails.city = this.eventForm.value.city!;
    this.eventDetails.state = this.eventForm.value.state!;
    this.eventDetails.zipcode = +this.eventForm.value.zipcode! || 0;

    this.eventsService.updateEvent(this.eventDetails.id, 
    this.eventDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['event-details', this.eventDetails.id]);
      }
    })
  }
}
