import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { PublicSiteApiService } from '../common/services/public-site-api.service';
import { PublicSiteService } from '../common/services/public-site.service';
import { PopUpMenuComponent } from './pop-up-menu/pop-up-menu.component';

@Component({
  selector: 'app-public-site-navigation',
  templateUrl: './public-site-navigation.component.html',
  styleUrls: ['./public-site-navigation.component.scss']
})
export class PublicSiteNavigationComponent implements OnInit {

  isHomeSelected: boolean = false;
  isServicesSelected: boolean = false;
  isContactUsSelected: boolean = false;
  isCareersSelected: boolean = false;
  isNewsSelected: boolean = false;
  isRegisterSelected: boolean = false;
  isLoginSelected: boolean = false;
  isPositionFixedEnabled: boolean = false;

  selectedLanguage: string = 'en';
  possibleLanguageValues = [
    { value: 'hn', display: 'Hn' },
    { value: 'en', display: 'En' }
  ];
  constructor(
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService,
    private dialog: MatDialog,
    private router: Router,
    private translocoService: TranslocoService
  ) {
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(): void {
    this.publicSiteService.isPositionFixedEnabled = true;
    this.isPositionFixedEnabled = this.publicSiteService.isPositionFixedEnabled;
  }

  ngOnInit(): void {
    const url = window.location.href;
    this.setActiveLink(url);
    this.isPositionFixedEnabled = this.publicSiteService.isPositionFixedEnabled;
    this.checkWhetherTheLanguageIsAlreadySet();
  }

  homeSelected(): void {
    this.isHomeSelected = true;
    this.isServicesSelected = false;
    this.isContactUsSelected = false;
    this.isCareersSelected = false;
    this.isNewsSelected = false;
    this.isRegisterSelected = false;
    this.isLoginSelected = false;
  }

  setSelectedLanguageToLocalStorage(): void {
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  servicesSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = true;
    this.isContactUsSelected = false;
    this.isCareersSelected = false;
    this.isNewsSelected = false;
    this.isRegisterSelected = false;
    this.isLoginSelected = false;
  }

  checkWhetherTheLanguageIsAlreadySet(): void {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
      this.translocoService.setActiveLang(this.selectedLanguage);
    }
  }

  contactSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = false;
    this.isContactUsSelected = true;
    this.isCareersSelected = false;
    this.isNewsSelected = false;
    this.isRegisterSelected = false;
    this.isLoginSelected = false;
  }

  careersSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = false;
    this.isContactUsSelected = false;
    this.isCareersSelected = true;
    this.isNewsSelected = false;
    this.isRegisterSelected = false;
    this.isLoginSelected = false;
  }

  newsSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = false;
    this.isContactUsSelected = false;
    this.isCareersSelected = false;
    this.isNewsSelected = true;
    this.isRegisterSelected = false;
    this.isLoginSelected = false;
  }

  registerSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = false;
    this.isContactUsSelected = false;
    this.isCareersSelected = false;
    this.isNewsSelected = false;
    this.isRegisterSelected = true;
    this.isLoginSelected = false;
  }

  loginSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = false;
    this.isContactUsSelected = false;
    this.isCareersSelected = false;
    this.isNewsSelected = false;
    this.isRegisterSelected = false;
    this.isLoginSelected = true;
  }

  setActiveLink(url: string): void {
    if (url.endsWith('home')) {
      this.isHomeSelected = true;
    } else if (url.endsWith('services')) {
      this.isServicesSelected = true;
    } else if (url.endsWith('contact-us')) {
      this.isContactUsSelected = true;
    } else if (url.includes('careers')) {
      this.isCareersSelected = true;
    } else if (url.endsWith('news')) {
      this.isNewsSelected = true;
    } else if (url.endsWith('register')) {
      this.isRegisterSelected = true;
    } else if (url.endsWith('login')) {
      this.isLoginSelected = true;
    }
  }

  onPopUpMenuClick() {
    this.dialog.open(PopUpMenuComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      height: "100%",
      width: "100%",
      disableClose: true,
      panelClass: "pop-up-menu",
      backdropClass: "back-drop-pop-up-menu"
    }).afterClosed().subscribe(res => {
      if (res) {
        switch (res) {
          case 'home':
            this.router.navigate(['public-site/landing/home']);
            this.homeSelected();
            break;
          case 'services':
            this.router.navigate(['public-site/landing/services']);
            this.servicesSelected();
            break;
          case 'contact-us':
            this.router.navigate(['public-site/landing/contact-us']);
            this.servicesSelected();
            break;
          case 'careers':
            this.router.navigate(['public-site/landing/careers']);
            this.careersSelected();
            break;
          case 'news':
            this.router.navigate(['public-site/landing/news']);
            this.newsSelected();
            break;
          case 'register':
            this.router.navigate(['public-site/landing/register']);
            this.registerSelected();
            break;
          case 'login':
            this.router.navigate(['public-site/landing/login']);
            this.loginSelected();
            break;
          default:
            this.router.navigate(['**']);
            break;
        }
      }
    });
  }

}
