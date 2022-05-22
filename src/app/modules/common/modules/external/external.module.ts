import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports: [
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [
    HttpClientModule
  ]
})
export class ExternalModule { }
