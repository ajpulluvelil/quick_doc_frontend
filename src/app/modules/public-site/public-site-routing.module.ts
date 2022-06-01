import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyOpportunityComponent } from './public-site-careers/apply-opportunity/apply-opportunity.component';
import { PublicSiteCareersComponent } from './public-site-careers/public-site-careers.component';
import { PublicSiteContactUsComponent } from './public-site-contact-us/public-site-contact-us.component';
import { PublicSiteHomeComponent } from './public-site-home/public-site-home.component';
import { PublicSiteLoginComponent } from './public-site-login/public-site-login.component';
import { PublicSiteNewsComponent } from './public-site-news/public-site-news.component';
import { ClinicSelectionComponent } from './public-site-register/clinic-selection/clinic-selection.component';
import { PublicSiteServicesComponent } from './public-site-services/public-site-services.component';
import { PublicSiteComponent } from './public-site/public-site.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
}, {
    path: 'landing',
    component: PublicSiteComponent,
    children: [{
        path: '',
        redirectTo: 'home'
    }, {
        path: 'home',
        component: PublicSiteHomeComponent
    }, {
        path: 'services',
        component: PublicSiteServicesComponent
    }, {
        path: 'contact-us',
        component: PublicSiteContactUsComponent
    }, {
        path: 'careers',
        component: PublicSiteCareersComponent
    }, {
        path: 'careers/apply',
        component: ApplyOpportunityComponent
    }, {
        path: 'news',
        component: PublicSiteNewsComponent
    }, {
        path: 'register',
        component: ClinicSelectionComponent
    }, {
        path: 'login',
        component: PublicSiteLoginComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicSiteRoutingModule { }
