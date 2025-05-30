import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { Event } from '../../../core/models/event';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnChanges {
  @Input() event!: Event;
  eventDescriptionSanitized: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.eventDescriptionSanitized = this.sanitizer.bypassSecurityTrustHtml(
      this.event.description
    );
  }
}
