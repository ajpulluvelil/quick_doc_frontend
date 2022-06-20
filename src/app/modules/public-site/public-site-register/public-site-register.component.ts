import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { NotificationServiceService } from '../../common/shared/services/notification/notification-service.service';
import { PublicSiteApiService } from '../common/services/public-site-api.service';
import { PublicSiteService } from '../common/services/public-site.service';

@Component({
  selector: 'app-public-site-register',
  templateUrl: './public-site-register.component.html',
  styleUrls: ['./public-site-register.component.scss']
})
export class PublicSiteRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  countriesList!: any;
  countries!: any;

  possibleGenders = [
    { value: 'MALE', display: 'Male' },
    { value: 'FEMALE', display: 'Female' },
    { value: 'OTHER', display: 'Other' }
  ];

  constructor(
    private fb: FormBuilder,
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService,
    private notificationService: NotificationServiceService,
    private translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.getCountriesList();
    this.registrationForm.controls['nationality'].valueChanges.pipe().subscribe(value => {
      this.countriesList = this.countriesList.filter((element: any) => element.includes(value));
    })
  }

  initRegistrationForm() {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      confirmEmail: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      district: new FormControl(''),
      city: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required),
      landmark: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required)
    });
  }

  onSubmit(registrationForm: FormGroup) {
  }

  switchLanguage() {
    if (this.translocoService.getActiveLang() === 'en') {
      this.translocoService.setActiveLang('hn');
    } else {
      this.translocoService.setActiveLang('en');
    }
  }

  async getCountriesList() {

  }

  displayFn(country: any): string {
    return country ? country : '';
  }

  triggerOperationTextCut(event: any): void {
    event.preventDefault();
  }

  triggerOperationTextCopy(event: any): void {
    event.preventDefault();
  }

  triggerOperationTextPaste(event: any): void {
    event.preventDefault();
    this.notificationService.openSnackBar('You can\'t paste the content!', 'OK');
  }

}
