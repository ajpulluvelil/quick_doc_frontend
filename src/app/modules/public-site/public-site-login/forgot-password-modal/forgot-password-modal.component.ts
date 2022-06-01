import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {

  passwordRecoveryImageUrl: string = '../../../../../assets/svg-icons/passwordRecovery.svg'

  passwordRecoveryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ForgotPasswordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.buildPasswordRecoveryForm();
  }

  buildPasswordRecoveryForm() {
    this.passwordRecoveryForm = this.fb.group({
      recoveryEmail: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/))])
    })
  }

  onConfirmClick(passwordRecoveryForm: FormGroup) {
    // this.dialogRef.close(passwordRecoveryForm);
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
