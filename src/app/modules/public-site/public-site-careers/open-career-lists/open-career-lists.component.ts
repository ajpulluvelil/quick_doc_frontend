import { Component, OnInit } from '@angular/core';
import { PublicSiteApiService } from '../../common/services/public-site-api.service';
import { PublicSiteService } from '../../common/services/public-site.service';

@Component({
  selector: 'app-open-career-lists',
  templateUrl: './open-career-lists.component.html',
  styleUrls: ['./open-career-lists.component.scss']
})
export class OpenCareerListsComponent implements OnInit {

  constructor(
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService
  ) { }

  ngOnInit(): void {
    this.getAllOpportunities();
  }

  getAllOpportunities() {
    this.publicSiteApiService.getAllOpportunities().subscribe((res: any) => {
      console.log(res)
    });
  }

}
