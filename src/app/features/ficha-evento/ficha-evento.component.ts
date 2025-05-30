import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EVENTS } from '../../core/data/data-events';
import { EventData } from '../../core/models/event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha-evento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ficha-evento.component.html',
  styleUrl: './ficha-evento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaEventoComponent {
  value: number = 0;
  min: number = 0;
  max: number = 100;

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

  changeValue(delta: number, index: number): void {
    const sessionRow = document.querySelector(
      '#input_' + index
    ) as HTMLInputElement;
    console.log(index);
    const newValue = this.value + delta;
    if (newValue >= this.min && newValue <= this.max) {
      this.value = newValue;
    }
  }
}
