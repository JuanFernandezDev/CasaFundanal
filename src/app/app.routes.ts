import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'principal',
    loadComponent: () =>
      import('./pages/pag-principal/pag-principal.component'),
    title: 'Main',
  },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
];
