import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    const url = window.location.href;
    this.setActiveLink(url);
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

  servicesSelected(): void {
    this.isHomeSelected = false;
    this.isServicesSelected = true;
    this.isContactUsSelected = false;
    this.isCareersSelected = false;
    this.isNewsSelected = false;
    this.isRegisterSelected = false;
    this.isLoginSelected = false;
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

}
