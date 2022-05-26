import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-query-list',
  templateUrl: './search-query-list.component.html',
  styleUrls: ['./search-query-list.component.scss']
})
export class SearchQueryListComponent implements OnInit {

  @Input() query: string = '';
  @Output() disableSearchQueryComponent = new EventEmitter;

  constructor() {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  onBackClick(): void {
    this.disableSearchQueryComponent.emit();
  }

}
