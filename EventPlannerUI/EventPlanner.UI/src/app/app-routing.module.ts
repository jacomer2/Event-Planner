import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './Events/events-page/events-page.component';
import { CreateEventComponent } from './Events/create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './Events/events-page/event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'dashboard', component: EventsPageComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'event-details/:id', component: EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
