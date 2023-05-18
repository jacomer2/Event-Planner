import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event-model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseApiUrl + '/api/events');
  }

  addEvent(addEventRequest: Event): Observable<Event> {
    addEventRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Event>(this.baseApiUrl + '/api/events', 
    addEventRequest);
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(this.baseApiUrl + '/api/events/' + id);
  }

  updateEvent(id: string, updateEventRequest: Event) : Observable<Event> {
    return this.http.put<Event>(this.baseApiUrl + '/api/events/' + id, 
    updateEventRequest);
  }

  deleteEvent(id: string): Observable<Event> {
    return this.http.delete<Event>(this.baseApiUrl + '/api/events/' + id)
  }

}
