export interface Cart {
  event: CartEvent;
  sessions: CartSession[];
}

export interface CartEvent {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface CartSession {
  date: string;
  availability: string;
  quantity?: number;
}
