import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routing/routing-routing.module').then(
        (m) => m.RoutingRoutingModule
      ),
  },
];
