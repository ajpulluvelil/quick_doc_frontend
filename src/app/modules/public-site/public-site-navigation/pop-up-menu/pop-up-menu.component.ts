import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private dialogRef: MatDialogRef<PopUpMenuComponent>
  ) { }

  ngOnInit(): void {
    const url = window.location.href;
    this.setActiveLink(url);
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

  servicesHasClicked() {
    this.closeDialog('services');
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
