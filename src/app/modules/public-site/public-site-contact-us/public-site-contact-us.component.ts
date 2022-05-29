import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationServiceService } from '../../common/shared/services/notification/notification-service.service';

@Component({
  selector: 'app-public-site-contact-us',
  templateUrl: './public-site-contact-us.component.html',
  styleUrls: ['./public-site-contact-us.component.scss']
})
export class PublicSiteContactUsComponent implements OnInit {

  contactUsForm!: FormGroup;
  isLocationEnabled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private notificationServiceService: NotificationServiceService
  ) { }

  get form() {
    return this.contactUsForm.controls;
  }

  ngOnInit(): void {
    this.initializeContactUsForm();
  }

  initializeContactUsForm(): void {
    this.contactUsForm = this.fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', Validators.required)
    });
  }

  onSubmit(contactUsForm: FormGroup) {
    this.notificationServiceService.openSuccessSnackBar('Message has been sent successfully', 'Ok');
    this.resetContactUsForm();
  }

  resetContactUsForm() {
    this.contactUsForm.reset();
  }

  enableLocationView(): void {
    this.isLocationEnabled = true;
  }

  closeLocationView(): void {
    this.isLocationEnabled = false;
  }

}
