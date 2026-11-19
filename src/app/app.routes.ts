import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { CartaJose } from './components/carta-jose/carta-jose';
import { CartaVictoria } from './components/carta-victoria/carta-victoria';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'jose', component: CartaJose },
  { path: 'victoria', component: CartaVictoria },
  { path: '**', redirectTo: 'inicio' },
];