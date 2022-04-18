import { Component, OnInit } from '@angular/core';
import { ServiceList } from '../common/interfaces/service-list-type';
import { serviceLists } from '../common/utils/services-lists';

@Component({
  selector: 'app-public-site-services',
  templateUrl: './public-site-services.component.html',
  styleUrls: ['./public-site-services.component.scss']
})
export class PublicSiteServicesComponent implements OnInit {

  services: Array<ServiceList> = [];

  constructor() { }

  ngOnInit(): void {
    this.services = serviceLists;
  }

}
