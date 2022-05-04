import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-site-careers',
  templateUrl: './public-site-careers.component.html',
  styleUrls: ['./public-site-careers.component.scss']
})
export class PublicSiteCareersComponent implements OnInit {

  isOpenPositionsRequested: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPositions() {
    this.isOpenPositionsRequested = true;
  }

}
