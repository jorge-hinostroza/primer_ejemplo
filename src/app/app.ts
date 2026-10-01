import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteEjemplo } from './componentes/componente-ejemplo/componente-ejemplo';
import { NuevoComponente } from './componentes/nuevo-componente/nuevo-componente';

@Component({
  imports: [RouterOutlet,ComponenteEjemplo,NuevoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primer_ejemplo');
}
