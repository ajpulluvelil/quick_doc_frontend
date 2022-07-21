import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { ProfessionalDashboardRoutingModule } from './professional-dashboard-routing.module';
import { ExternalModule } from '../../common/modules/external/external.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../../common/modules/material/material.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ProfessionalDashboardComponent
  ],
  imports: [
    CommonModule,
    ExternalModule,
    NgxChartsModule,
    MaterialModule,
    ProfessionalDashboardRoutingModule,
    MatTableModule
  ]
})
export class ProfessionalDashboardModule { }
