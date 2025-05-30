import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { EVENTS } from '../../core/data/data-events';
import { EventData } from '../../core/models/event';

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cartelera.component.html',
  styleUrl: './cartelera.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarteleraComponent implements OnInit {
  events = signal<EventData[]>([]);

  ngOnInit() {
    const sortedEvents = EVENTS.sort((a, b) => Number(a.endDate) - Number(b.endDate));
    this.events.set(sortedEvents);
  }
}
