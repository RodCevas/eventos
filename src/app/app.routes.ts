import { Routes } from '@angular/router';
import { CarteleraComponent } from './features/cartelera/cartelera.component';
import { FichaEventoComponent } from './features/ficha-evento/ficha-evento.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cartelera', pathMatch: 'full' },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'evento/:id', component: FichaEventoComponent },
  { path: '**', redirectTo: '/cartelera', pathMatch: 'full' },
];
