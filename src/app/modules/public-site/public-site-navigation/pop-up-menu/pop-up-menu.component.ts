import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-pop-up-menu',
  templateUrl: './pop-up-menu.component.html',
  styleUrls: ['./pop-up-menu.component.scss']
})
export class PopUpMenuComponent implements OnInit {

  isHomeSelected: boolean = false;
  isServicesSelected: boolean = false;
  isContactUsSelected: boolean = false;
  isCareersSelected: boolean = false;
  isNewsSelected: boolean = false;
  isRegisterSelected: boolean = false;
  isLoginSelected: boolean = false;
  isPositionFixedEnabled: boolean = false;

  selectedLanguage = 'en';
  possibleLanguageValues = [
    { value: 'hn', display: 'Hindi' },
    { value: 'en', display: 'English' }
  ];

  constructor(
    private dialogRef: MatDialogRef<PopUpMenuComponent>,
    private translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    const url = window.location.href;
    this.setActiveLink(url);
    this.checkWhetherTheLanguageIsAlreadySet();
  }

  onCloseMenuClick(): void {
    this.closeDialog();
  }

  setActiveLink(url: string): void {
    if (url.endsWith('home')) {
      this.isHomeSelected = true;
    } else if (url.endsWith('services')) {
      this.isServicesSelected = true;
    } else if (url.endsWith('contact-us')) {
      this.isContactUsSelected = true;
    } else if (url.endsWith('careers')) {
      this.isCareersSelected = true;
    } else if (url.endsWith('news')) {
      this.isNewsSelected = true;
    } else if (url.endsWith('register')) {
      this.isRegisterSelected = true;
    } else if (url.endsWith('login')) {
      this.isLoginSelected = true;
    }
  }

  homeHasClicked() {
    this.closeDialog('home');
  }

  setSelectedLanguageToLocalStorage(): void {
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  servicesHasClicked() {
    this.closeDialog('services');
  }

  checkWhetherTheLanguageIsAlreadySet(): void {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
      this.translocoService.setActiveLang(selectedLanguage);
    }
  }

  contactUsHasClicked() {
    this.closeDialog('contact-us');
  }

  careersHasClicked() {
    this.closeDialog('careers');
  }

  newsHasClicked() {
    this.closeDialog('news');
  }

  registerHasClicked() {
    this.closeDialog('register');
  }

  loginHasClicked() {
    this.closeDialog('login');
  }

  closeDialog(value?: any) {
    this.dialogRef.close(value);
  }

}
