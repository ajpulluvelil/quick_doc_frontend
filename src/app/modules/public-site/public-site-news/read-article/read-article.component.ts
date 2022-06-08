import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsListType } from '../../common/interfaces/news-list-type';

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.scss']
})
export class ReadArticleComponent implements OnInit {

  @Input() article: NewsListType = {
    id: '',
    image: '',
    headLine: '',
    description: '',
    date: ''
  };
  @Output() readArticleViewDisabled = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onBackClick(): void {
    this.readArticleViewDisabled.emit()
  }

}
