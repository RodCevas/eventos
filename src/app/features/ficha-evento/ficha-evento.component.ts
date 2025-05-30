import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EVENTS } from '../../core/data/data-events';
import { EventData } from '../../core/models/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-evento.component.html',
  styleUrl: './ficha-evento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaEventoComponent {
  event = signal<EventData>({
    id: '',
    title: '',
    subtitle: '',
    image: '',
    place: '',
    startDate: '',
    endDate: '',
    description: '',
    sessions: [],
  });
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id')!;
    const filteredEvent = EVENTS.find((event) => event.id === eventId);
    if (filteredEvent) {
      this.event.set(filteredEvent);
    }
  }
}
