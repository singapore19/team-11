import { Component, OnInit,   ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../util/login.service';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  purple: {
    primary: '#912591',
    secondary: '#FAE3E3'
  }
};

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {


  constructor(private matSnackBar: MatSnackBar) {
    console.log('Constructor Run');
  }

  ngOnInit() {

  }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Nightwalk Event 1',
      color: colors.purple,
      start: new Date()
    },
  ];

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }



}
