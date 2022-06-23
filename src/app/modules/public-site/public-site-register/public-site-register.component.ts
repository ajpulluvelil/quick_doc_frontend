import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { NotificationServiceService } from '../../common/shared/services/notification/notification-service.service';
import { CountryList } from '../common/interfaces/country-list-type';
import { PublicSiteApiService } from '../common/services/public-site-api.service';
import { PublicSiteService } from '../common/services/public-site.service';
import { countryLists } from '../common/utils/country-lists';

@Component({
  selector: 'app-public-site-register',
  templateUrl: './public-site-register.component.html',
  styleUrls: ['./public-site-register.component.scss']
})
export class PublicSiteRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  countriesList: CountryList[] = countryLists;
  countries!: any;
  states!: any;
  stateList!: any[];

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
    private translocoService: TranslocoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesList;
    this.initRegistrationForm();
    this.registrationForm.controls['nationality'].valueChanges.pipe().subscribe(value => {
      this.countriesList = this.countries.filter((element: any) => element.display.includes(value));
      const stateList = this.registrationForm.controls['nationality'].value;
      if (stateList.display || stateList.value) {
        this.registrationForm.controls['state'].enable();
        this.stateList = stateList.state;
        this.states = stateList.state;
      } else {
        this.registrationForm.controls['state'].disable();
        this.registrationForm.controls['state'].reset();
      }
    });
    this.registrationForm.controls['state'].valueChanges.pipe().subscribe(value => {
      if (this.states) {
        this.stateList = this.states.filter((element: { display: string | any[]; }) => element.display.includes(value));
      }
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
      state: new FormControl({
        value: '',
        disabled: true
      }, Validators.required),
      district: new FormControl({
        value: '',
        disabled: true
      }),
      city: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required),
      landmark: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required)
    });
  }

  onSubmit(registrationForm: FormGroup) {
    this.router.navigate(['public-site/landing/clinic-selection']);
  }

  switchLanguage() {
    if (this.translocoService.getActiveLang() === 'en') {
      this.translocoService.setActiveLang('hn');
    } else {
      this.translocoService.setActiveLang('en');
    }
  }

  displayFn(country: any): string {
    return country.display;
  }

  displayFunctionState(state: any): string {
    return state.display;
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
