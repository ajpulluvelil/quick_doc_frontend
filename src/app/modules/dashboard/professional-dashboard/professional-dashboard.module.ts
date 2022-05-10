import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { ProfessionalDashboardRoutingModule } from './professional-dashboard-routing.module';



@NgModule({
  declarations: [
    ProfessionalDashboardComponent
  ],
  imports: [
    CommonModule,
    ProfessionalDashboardRoutingModule
  ]
})
export class ProfessionalDashboardModule { }
