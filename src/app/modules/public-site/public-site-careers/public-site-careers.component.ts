import { Component, OnInit } from '@angular/core';
import { CareerType } from '../common/interfaces/career-type';
import { CareerList } from '../common/utils/career-list';

@Component({
  selector: 'app-public-site-careers',
  templateUrl: './public-site-careers.component.html',
  styleUrls: ['./public-site-careers.component.scss']
})
export class PublicSiteCareersComponent implements OnInit {

  careerLists: CareerType[] = CareerList;

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  scrollToCareerWrapper(): void {
    const element = document.getElementById("careers");
    if (element)
      element.scrollIntoView();
  }

}
