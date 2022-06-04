import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerType } from '../../common/interfaces/career-type';
import { CareerList } from '../../common/utils/career-list';

@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.scss']
})
export class OpportunityDetailsComponent implements OnInit {

  opportunityId: any = '';
  career: CareerType = {
    id: '',
    name: '',
    description: ''
  };
  careerLists: CareerType[] = CareerList;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.getOpportunityIdFromQueryParams();
    this.findCareerObject();
  }

  findCareerObject(): void {
    const career = this.careerLists.find(career => career.id === this.opportunityId);
    if (career) {
      this.career = career;
    }
  }

  getOpportunityIdFromQueryParams(): void {
    this.route.queryParamMap.subscribe(params =>
      this.opportunityId = params.get('id')
    );
  }

  onBackClick(): void {
    this.router.navigate(['public-site/landing/careers']);
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

}
