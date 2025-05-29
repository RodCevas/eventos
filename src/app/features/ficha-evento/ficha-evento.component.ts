import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ficha-evento',
  standalone: true,
  imports: [],
  templateUrl: './ficha-evento.component.html',
  styleUrl: './ficha-evento.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaEventoComponent { }
