import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerType } from '../../common/interfaces/career-type';
import { CareerList } from '../../common/utils/career-list';

@Component({
  selector: 'app-apply-opportunity',
  templateUrl: './apply-opportunity.component.html',
  styleUrls: ['./apply-opportunity.component.scss']
})
export class ApplyOpportunityComponent implements OnInit {

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

}
