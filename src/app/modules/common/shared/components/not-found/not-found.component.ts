import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  @HostListener('window:beforeunload', ['$event'])
  beforeunload() {
  }

  ngOnInit(): void {
  }

  onBackwardClick() {
    this.router.navigate(['/public-site']);
  }

  ngOnDestroy(): void {
  }

}
