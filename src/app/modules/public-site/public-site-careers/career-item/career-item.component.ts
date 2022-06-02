import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.scss']
})
export class CareerItemComponent implements OnInit {

  @Input() career: any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  applyForTheSpecifiedOpportunity(opportunityId: any): void {
    const URL = this.router.url;
    this.router.navigate([URL + '/apply'], { queryParams: { id: opportunityId } });
    // this.router.navigateByUrl(URL + '/apply', { state: opportunity }); 
  }

}
