import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-site-service',
  templateUrl: './public-site-service.component.html',
  styleUrls: ['./public-site-service.component.scss']
})
export class PublicSiteServiceComponent implements OnInit {

  @Input() service: any;

  constructor() { }

  ngOnInit(): void {
  }

}
