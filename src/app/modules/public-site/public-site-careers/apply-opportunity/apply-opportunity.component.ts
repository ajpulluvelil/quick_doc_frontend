import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENVIRONMENT } from 'src/environments/environment';

@Component({
  selector: 'app-apply-opportunity',
  templateUrl: './apply-opportunity.component.html',
  styleUrls: ['./apply-opportunity.component.scss']
})
export class ApplyOpportunityComponent implements OnInit {

  careerAcceptableUploadFileTypes = ENVIRONMENT.MODULES.COMMON.CAREER.ACCEPTABLE_UPLOAD_FILE_TYPES;

  applyOpportunityForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get additionalLinks() {
    return this.applyOpportunityForm.controls["additionalLinks"] as FormArray;
  }

  initializeForm(): void {
    this.applyOpportunityForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      additionalLinks: this.fb.array([])
    });
    this.pushAdditionalLinkForm();
  }

  onAddAdditionalLinkClick(additionalLinkFormControls: AbstractControl[]): void {
    console.log(additionalLinkFormControls);
    
    if (this.checkAdditionalLinkFormControlsAreValid(additionalLinkFormControls) === 0) {
      this.pushAdditionalLinkForm();
    } else {
      (this.applyOpportunityForm.controls['additionalLinks'] as FormArray).controls.find(additionalLink => additionalLink.status === 'INVALID')?.setErrors({ 'invalid': true });
    }
  }

  checkAdditionalLinkFormControlsAreValid(additionalLinkFormControls: AbstractControl[]): number {
    let invalidItems = 0;
    if (additionalLinkFormControls && additionalLinkFormControls.length > 0) {
      invalidItems = additionalLinkFormControls.filter(formControl => formControl.status === 'INVALID').length;
    }
    return invalidItems;
  }

  pushAdditionalLinkForm(): void {
    const additionalLinkForm = this.fb.group({
      additionalLink: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    });
    this.additionalLinks.push(additionalLinkForm);
  }

  onRemoveAdditionalLinkClick(index: number): void {
    this.additionalLinks.removeAt(index);
  }

}
