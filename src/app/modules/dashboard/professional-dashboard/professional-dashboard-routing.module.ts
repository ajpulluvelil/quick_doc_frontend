import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfessionalDashboardComponent } from "./professional-dashboard/professional-dashboard.component";

const routes: Routes = [{
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full'
}, {
    path: 'analytics',
    component: ProfessionalDashboardComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfessionalDashboardRoutingModule { }