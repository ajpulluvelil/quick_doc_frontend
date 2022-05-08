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
import { OpenCareerListsComponent } from './public-site-careers/open-career-lists/open-career-lists.component';
import { NewsComponent } from './public-site-news/news/news.component';



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
    OpenCareerListsComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ExternalModule,
    PublicSiteRoutingModule
  ]
})
export class PublicSiteModule { }
