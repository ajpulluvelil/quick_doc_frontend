import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicSiteComponent } from './public-site/public-site.component';
import { PublicSiteRoutingModule } from './public-site-routing.module';
import { MaterialModule } from '../common/modules/material/material.module';
import { PublicSiteNavigationComponent } from './public-site-navigation/public-site-navigation.component';
import { PublicSiteHomeComponent } from './public-site-home/public-site-home.component';
import { PublicSiteServicesComponent } from './public-site-services/public-site-services.component';
import { PublicSiteContactUsComponent } from './public-site-contact-us/public-site-contact-us.component';
import { PublicSiteCareersComponent } from './public-site-careers/public-site-careers.component';
import { PublicSiteNewsComponent } from './public-site-news/public-site-news.component';
import { PublicSiteRegisterComponent } from './public-site-register/public-site-register.component';
import { PublicSiteLoginComponent } from './public-site-login/public-site-login.component';
import { PublicSiteServiceComponent } from './public-site-services/public-site-service/public-site-service.component';
import { ForgotPasswordModalComponent } from './public-site-login/forgot-password-modal/forgot-password-modal.component';
import { ExternalModule } from '../common/modules/external/external.module';
import { NewsComponent } from './public-site-news/news/news.component';
import { SharedModule } from '../common/shared/shared.module';
import { ClinicSelectionComponent } from './public-site-register/clinic-selection/clinic-selection.component';
import { ClinicComponent } from './public-site-register/clinic/clinic.component';
import { PopUpMenuComponent } from './public-site-navigation/pop-up-menu/pop-up-menu.component';
import { SearchQueryListComponent } from './public-site-home/search-query-list/search-query-list.component';
import { LocationComponent } from './public-site-contact-us/location/location.component';
import { CareerItemComponent } from './public-site-careers/career-item/career-item.component';
import { ApplyOpportunityComponent } from './public-site-careers/apply-opportunity/apply-opportunity.component';
import { OpportunityDetailsComponent } from './public-site-careers/opportunity-details/opportunity-details.component';
import { ReadArticleComponent } from './public-site-news/read-article/read-article.component';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [
    PublicSiteComponent,
    PublicSiteNavigationComponent,
    PublicSiteHomeComponent,
    PublicSiteServicesComponent,
    PublicSiteContactUsComponent,
    PublicSiteCareersComponent,
    PublicSiteNewsComponent,
    PublicSiteRegisterComponent,
    PublicSiteLoginComponent,
    PublicSiteServiceComponent,
    ForgotPasswordModalComponent,
    NewsComponent,
    ClinicSelectionComponent,
    ClinicComponent,
    PopUpMenuComponent,
    SearchQueryListComponent,
    LocationComponent,
    CareerItemComponent,
    ApplyOpportunityComponent,
    OpportunityDetailsComponent,
    ReadArticleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ExternalModule,
    PublicSiteRoutingModule,
    SharedModule,
    TranslocoModule
  ]
})
export class PublicSiteModule { }
