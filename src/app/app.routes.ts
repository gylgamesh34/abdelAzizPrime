import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'AbdelAzizPrime',
    loadComponent: () => import('./components/home/home.component'),
  },
  {
    path: 'about',
    title: 'A propos | AbdelAzizPrime',
    loadComponent: () => import('./components/about/about/about.component'),
  },
  {
    path: 'particulier',
    title: 'Particulier | AbdelAzizPrime',
    loadComponent: () => import('./components/particulier/particulier.component'),
  },
  {
    path: 'professionnel',
    title: 'Professionnel | AbdelAzizPrime',
    loadComponent: () => import('./components/profesionnel/profesionnel.component'),
  },
  {
    path: 'contact',
    title: 'Contact | AbdelAzizPrime',
    loadComponent: () => import('./components/contact/contact.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
