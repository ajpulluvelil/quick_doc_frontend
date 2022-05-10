import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfessionalDashboardComponent } from "./professional-dashboard/professional-dashboard.component";

const routes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'dashboard',
    component: ProfessionalDashboardComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfessionalDashboardRoutingModule { }