import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';

@Component({
  selector: 'app-public-site-login',
  templateUrl: './public-site-login.component.html',
  styleUrls: ['./public-site-login.component.scss']
})
export class PublicSiteLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(loginForm: FormGroup) {
    console.log('form', loginForm)
  }

  forgotPassword() {
    this.dialog.open(ForgotPasswordModalComponent, {
      disableClose: true
    }).afterClosed().subscribe(res => {
      if (res) {
      }
    });
  }

}
