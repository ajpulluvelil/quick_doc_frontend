import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from '../modules/material/material.module';
import { CommonErrorComponent } from './components/common-error/common-error.component';
import { CommonInputComponent } from './components/common-input/common-input.component';
import { CommonSelectLanguageComponent } from './components/common-select-language/common-select-language.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    CommonErrorComponent,
    CommonInputComponent,
    CommonSelectLanguageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonErrorComponent
  ]
})
export class SharedModule { }
