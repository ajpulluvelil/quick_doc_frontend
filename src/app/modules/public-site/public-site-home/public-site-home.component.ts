import { Component, OnInit } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';
import { PublicSiteApiService } from '../common/services/public-site-api.service';
import { PublicSiteService } from '../common/services/public-site.service';

@Component({
  selector: 'app-public-site-home',
  templateUrl: './public-site-home.component.html',
  styleUrls: ['./public-site-home.component.scss']
})
export class PublicSiteHomeComponent implements OnInit {

  carousel = ENVIRONMENT.MODULES.COMMON.CAROUSEL;

  imageUrl: string = '../../../../assets/images/image-one-for-home.jpg';
  imageName: string = 'pic.jpg';
  searchQuery: string = '';
  isSearchQueryComponentEnabled: boolean = false;
  imageUrls = [
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselOne.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselTwo.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselThree.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselFour.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselFive.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselSix.jpg' }
  ]

  constructor(
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService
  ) {
    this.publicSiteService.isPositionFixedEnabled = false;
  }

  ngOnInit(): void {
  }

  onEnterPress(event: any): void {
    if (this.searchQuery && event.key === "Enter")
      this.onSearchQueryClick();
  }

  onSearchQueryClick(): void {
    if (this.searchQuery)
      this.isSearchQueryComponentEnabled = true;
  }

  disableSearchQueryComponent() {
    this.isSearchQueryComponentEnabled = false;
  }

}
