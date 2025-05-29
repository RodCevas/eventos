import { Routes } from '@angular/router';
import { CarteleraComponent } from './features/cartelera/cartelera.component';
import { FichaEventoComponent } from './features/ficha-evento/ficha-evento.component';

export const routes: Routes = [
  { path: '', component: CarteleraComponent },
  { path: 'evento', component: FichaEventoComponent },
  { path: '**', redirectTo: '' }
];
