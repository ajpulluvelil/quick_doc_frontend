import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalPatientWebRoutingModule } from './professional-patient-web-routing.module';
import { ProfessionalPatientComponent } from './professional-patient/professional-patient.component';
import { ProfessionalPatientSidebarComponent } from './professional-patient-sidebar/professional-patient-sidebar.component';
import { ProfessionalPatientNavigationComponent } from './professional-patient-navigation/professional-patient-navigation.component';


@NgModule({
  declarations: [
    ProfessionalPatientComponent,
    ProfessionalPatientSidebarComponent,
    ProfessionalPatientNavigationComponent
  ],
  imports: [
    CommonModule,
    ProfessionalPatientWebRoutingModule
  ]
})
export class ProfessionalPatientWebModule { }
