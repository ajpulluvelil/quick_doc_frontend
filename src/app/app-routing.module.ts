import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './modules/common/shared/components/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'public-site',
  pathMatch: 'full'
}, {
  path: 'public-site',
  loadChildren: () => import('./modules/public-site/public-site.module').then(module => module.PublicSiteModule)
}, {
  path: 'professional/dashboard',
  loadChildren: () => import('./modules/dashboard/professional-dashboard/professional-dashboard.module').then(module => module.ProfessionalDashboardModule)
}, {
  path: 'user/dashboard',
  loadChildren: () => import('./modules/dashboard/user-dashboard/user-dashboard.module').then(module => module.UserDashboardModule)
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
