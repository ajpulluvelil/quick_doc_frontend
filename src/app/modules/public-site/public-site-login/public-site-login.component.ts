import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableDataList } from '../common/utils/table-data-list';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';

@Component({
  selector: 'app-public-site-login',
  templateUrl: './public-site-login.component.html',
  styleUrls: ['./public-site-login.component.scss']
})
export class PublicSiteLoginComponent implements OnInit {

  loginForm!: FormGroup;
  tableDataList = TableDataList;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
    console.log('tableDataList', this.tableDataList);
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('professional_admin', Validators.required),
      password: new FormControl('admin_password', Validators.required),
    });
  }

  onSubmit(loginForm: FormGroup) {
    if (loginForm.value.username === 'professional_admin' && loginForm.value.password === 'admin_password') {
      this.router.navigate(['/professional']);
    } else {
      // snack bar implementation
    }
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
