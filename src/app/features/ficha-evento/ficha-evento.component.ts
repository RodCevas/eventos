import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/models/cart';

@Component({
  selector: 'app-ficha-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-evento.component.html',
  styleUrl: './ficha-evento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaEventoComponent {
  eventId: string = '';

  eventCart = signal<Cart>({
    event: { id: '', title: '', subtitle: '', image: '' },
    sessions: [],
  });

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id')!;
    this.getCartEvents();
  }

  getCartEvents() {
    const filteredEvent = this.cartService
      .getCart()
      .find((event) => event.event.id === this.eventId);
    if (filteredEvent) {
      this.eventCart.set(filteredEvent);
    }
  }

  increase(sessionDate: string) {
    this.cartService.addRemoveFromCart(this.eventId, sessionDate, 'increase');
    this.getCartEvents();
  }

  decrease(sessionDate: string) {
    this.cartService.addRemoveFromCart(this.eventId, sessionDate, 'decrease');
    this.getCartEvents();
  }
}
