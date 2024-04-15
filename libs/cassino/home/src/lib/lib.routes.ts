import { Route } from '@angular/router';
import { CassinoHomeComponent } from './home/home.component';

export const homeRoutes: Route[] = [{ path: 'home', component: CassinoHomeComponent },{ path: '**', redirectTo: 'home' }];


// www.sites.com/
