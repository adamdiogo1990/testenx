import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const homeRoutes: Route[] = [{ path: '', component: HomeComponent },{ path: 'deposito', loadChildren: () => import('@ag/cassino/home').then(m => m.CassinoHomeModule) }];
