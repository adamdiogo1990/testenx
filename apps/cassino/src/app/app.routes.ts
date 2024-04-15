import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('@ag/cassino/home').then(m => m.CassinoHomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@ag/cassino/login').then(m => m.CassinoLoginModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
