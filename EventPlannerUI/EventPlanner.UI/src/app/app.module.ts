import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventsPageComponent } from './Events/events-page/events-page.component';
import { CreateEventComponent } from './Events/create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './Events/events-page/event-details/event-details.component';
import { TodoListComponent } from './Events/events-page/event-details/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    EventsPageComponent,
    CreateEventComponent,
    HomeComponent,
    EventDetailsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
