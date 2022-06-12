import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private publicSiteApiService: PublicSiteApiService
  ) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.getCountriesList();
    this.registrationForm.controls['country'].valueChanges.pipe().subscribe(value => {
      this.countriesList = this.countries.filter((element: any) => element.name.common.includes(value));
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
    })
  }

  onSubmit(registrationForm: FormGroup) {
    console.log('form', registrationForm);
  }

  async getCountriesList() {
    await this.publicSiteApiService.getCountriesList().subscribe((res: any) => {
      this.countries = res
      this.countriesList = this.countries;
    });
  }

  displayFn(country: any): string {
    return country ? country : '';
  }

  onPaste(event: any): boolean {
    event.preventDefault;
    return false;
  }

  onDrop(event: any): boolean {
    event.preventDefault;
    return false;
  }
}
