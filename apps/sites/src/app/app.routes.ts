import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('@ag/sites/home').then(m => m.SitesHomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@ag/sites/login').then(m => m.LoginModule)
  },
  {
    path: 'cassino',
    loadChildren: () => import('@ag/cassino/home').then(m => m.CassinoHomeModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
