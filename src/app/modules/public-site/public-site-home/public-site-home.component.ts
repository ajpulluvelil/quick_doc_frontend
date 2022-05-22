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
  imageName: string = 'pic.jpg'
  imageUrls = [
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselOne.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselTwo.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselThree.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselFour.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselFive.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselSix.jpg' },
    { path: '../../../../assets/images/publicSiteCarousel/publicSiteCarouselSeven.jpg' }
  ]

  constructor(
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService
  ) {
    this.publicSiteService.isPositionFixedEnabled = false;
  }

  ngOnInit(): void {
    // this.runningImageInterval();
  }

  // runningImageInterval(): void {
  //   let imageUrlIndex = 0;
  //   setInterval(() => {
  //     this.imageUrl = this.imageUrls[imageUrlIndex];
  //     imageUrlIndex++;
  //     if (imageUrlIndex > 3)
  //       imageUrlIndex = 0;
  //   }, 5000)
  // }

}
