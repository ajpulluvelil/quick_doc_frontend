import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss']
})
export class CommonInputComponent implements OnInit {

  @Input() appAutoFocus = false;
  @Input() formGroup!: FormGroup;
  @Input() control!: FormControl;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() id = '';
  @Input() name: string = this.id || '';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() errorMessage: string | boolean = false;
  @Input() extraClass: string | string[] = '';
  @Input() maxLength = 15;
  @Input() minLength = 0;

  @Output() onBlur: EventEmitter<boolean>;

  objectFn = Object;
  
  constructor(
    private ref: ChangeDetectorRef
  ) {
    this.onBlur = new EventEmitter();
  }

  ngOnInit(): void {
  }

  blur(): void {
    this.onBlur.emit(true);
  }

}
