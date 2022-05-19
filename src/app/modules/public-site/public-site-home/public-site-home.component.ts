import { Component, OnInit } from '@angular/core';
import { PublicSiteApiService } from '../common/services/public-site-api.service';
import { PublicSiteService } from '../common/services/public-site.service';

@Component({
  selector: 'app-public-site-home',
  templateUrl: './public-site-home.component.html',
  styleUrls: ['./public-site-home.component.scss']
})
export class PublicSiteHomeComponent implements OnInit {

  imageUrl: string = '../../../../assets/images/image-one-for-home.jpg';
  imageName: string = 'pic.jpg'
  imageUrls = [
    '../../../../assets/images/image-one-for-home.jpg',
    '../../../../assets/images/image-two-for-home.jpg',
    '../../../../assets/images/image-three-for-home.jpg',
    '../../../../assets/images/image-four-for-home.jpg'
  ]


  values: string[] = ["id", "name", "age", "phoneNumber"];
  rows:  any[] = [
    {
      "id": "1",
      "name": "Abc",
      "age": "27",
      "phoneNumber": "8113811270"
    }
  ]


  constructor(
    private publicSiteService: PublicSiteService,
    private publicSiteApiService: PublicSiteApiService
  ) {
    this.publicSiteService.isPositionFixedEnabled = false;
  }

  ngOnInit(): void {
    this.runningImageInterval();
  }

  runningImageInterval(): void {
    let imageUrlIndex = 0;
    setInterval(() => {
      this.imageUrl = this.imageUrls[imageUrlIndex];
      imageUrlIndex++;
      if (imageUrlIndex > 3)
        imageUrlIndex = 0;
    }, 5000)
  }

}

export interface rowType {
  "id": string,
  "name": string,
  "age": string,
  "phoneNumber": string
}
