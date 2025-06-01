import { Injectable, signal } from '@angular/core';
import { EVENTS } from '../data/data-events';
import { EventData } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private events = signal<EventData[]>(EVENTS);

  getEvents = this.events.asReadonly();
}
