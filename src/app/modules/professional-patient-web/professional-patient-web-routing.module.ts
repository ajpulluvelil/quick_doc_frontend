import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalPatientComponent } from './professional-patient/professional-patient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  }, // {
  //   path: 'web',
  //   loadChildren: () => import('../dashboard/professional-dashboard/professional-dashboard.module').then(module => module.ProfessionalDashboardModule)
  // }
  {
    path: 'web',
    component: ProfessionalPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalPatientWebRoutingModule { }
