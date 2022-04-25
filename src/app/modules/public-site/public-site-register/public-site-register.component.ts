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

  constructor(
    private fb: FormBuilder,
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService
  ) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.getCountriesList();
    this.registrationForm.controls['country'].valueChanges.pipe().subscribe(value => {
      this.countriesList = this.countriesList.filter((element: any) => element.name.common === value);
      console.log('value', this.countriesList);
    })
  }

  initRegistrationForm() {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      confirmEmail: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      district: new FormControl(''),
      city: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required),
      landMark: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required)
    })
  }

  onSubmit(registrationForm: FormGroup) {
    console.log(registrationForm);
  }

  async getCountriesList() {
    await this.publicSiteApiService.getCountriesList().subscribe((res: any) => {
      this.countriesList = res
      console.log('countriesList', this.countriesList);
    });
  }

  displayFn(country: any): string {
    return country && country.name ? country.name.common ? country.name.common : '' : '';
  }

}
