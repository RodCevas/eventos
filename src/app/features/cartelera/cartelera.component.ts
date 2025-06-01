import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { EventData } from '../../core/models/event';
import { EventosService } from '../../core/services/events.service';

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

  constructor(private eventosService: EventosService) {}

  ngOnInit() {
    const sortedEvents = this.eventosService
      .getEvents()
      .sort((a, b) => Number(a.endDate) - Number(b.endDate));
    this.events.set(sortedEvents);
  }
}
