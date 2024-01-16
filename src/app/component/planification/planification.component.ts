import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      {title: 'réuinion mensuelle', date: '2023-11-01'},
      {title: "avancement de projet", date: '2023-11-07'},
      {title: 'conférence', date: '2023-11-13'},
      {title: 'réuinion avec client', date: '2023-11-15'}
    ]
  };
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click!' + arg.dateStr)
  }

  }
  


