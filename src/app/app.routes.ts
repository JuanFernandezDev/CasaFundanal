import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'principal',
    loadComponent: () =>
      import('./pages/pag-principal/pag-principal.component'),
    title: 'Casa fundanal',
  },
  {
    path: 'casa-atico',
    loadComponent: () => import('./pages/casa-atico/casa-atico.component'),
    title: 'Casa Atico',
  },
  {
    path: 'casa-principal',
    loadComponent: () =>
      import('./pages/casa-principal/casa-principal.component'),
    title: 'Casa Principal',
  },
  {
    path: 'actividades',
    loadComponent: () => import('./pages/actividades/actividades.component'),
    title: 'Actividades',
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component'),
    title: 'About Us',
  },

  { path: '', redirectTo: '/principal', pathMatch: 'full' },
];
