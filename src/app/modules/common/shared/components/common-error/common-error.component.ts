import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss']
})
export class CommonErrorComponent implements OnInit {

  @Input() errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
