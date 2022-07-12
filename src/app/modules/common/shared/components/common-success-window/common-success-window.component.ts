import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonSuccessDataType } from '../../interfaces/common-success-data-type';

@Component({
  selector: 'app-common-success-window',
  templateUrl: './common-success-window.component.html',
  styleUrls: ['./common-success-window.component.scss']
})
export class CommonSuccessWindowComponent implements OnInit {

  @Input() successWindowData: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('successWindowData', this.successWindowData);
  }

  onButtonClick() {
    this.router.navigate([this.successWindowData.routerLink]);
  }

}
