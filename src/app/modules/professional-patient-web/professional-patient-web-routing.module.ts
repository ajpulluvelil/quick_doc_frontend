import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalPatientComponent } from './professional-patient/professional-patient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  }, {
    path: 'web',
    component: ProfessionalPatientComponent,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('../dashboard/professional-dashboard/professional-dashboard-routing.module').then(module => module.ProfessionalDashboardRoutingModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalPatientWebRoutingModule { }
