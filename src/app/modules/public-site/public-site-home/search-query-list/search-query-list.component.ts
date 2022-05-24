import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-query-list',
  templateUrl: './search-query-list.component.html',
  styleUrls: ['./search-query-list.component.scss']
})
export class SearchQueryListComponent implements OnInit {

  @Input() query: string = '';
  @Output() disableSearchQueryComponent = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  onBackClick(): void {
    this.disableSearchQueryComponent.emit();
  }

}
