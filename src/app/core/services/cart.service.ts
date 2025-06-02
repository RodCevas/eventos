import { Injectable, signal } from '@angular/core';
import { Cart } from '../models/cart';
import { CART } from '../data/data-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<Cart[]>(CART);

  getCart = this.cart.asReadonly();

  constructor() {}

  addRemoveFromCart(
    eventId: string,
    sessionDate: string,
    addRemoveDelete: string
  ) {
    this.cart.update((prevCart) => {
      return prevCart.map((cart) => {
        if (cart.event.id !== eventId) return cart;
        return {
          ...cart,
          sessions: cart.sessions.map((session) => {
            if (session.date !== sessionDate) return session;
            if (
              addRemoveDelete === 'increase' &&
              parseInt(session.availability) > 0
            ) {
              return {
                date: session.date,
                availability: String(parseInt(session.availability) - 1),
                quantity: (session.quantity ?? 0) + 1,
              };
            } else if (
              addRemoveDelete === 'decrease' &&
              (session.quantity ?? 0) > 0
            ) {
              return {
                date: session.date,
                availability: String(parseInt(session.availability) + 1),
                quantity: (session.quantity ?? 0) - 1,
              };
            } else if (
              addRemoveDelete === 'delete' &&
              (session.quantity ?? 0) > 0
            ) {
              return {
                date: session.date,
                availability: String(
                  parseInt(session.availability) + (session.quantity ?? 0)
                ),
                quantity: 0,
              };
            } else {
              return session;
            }
          }),
        };
      });
    });
  }
}
