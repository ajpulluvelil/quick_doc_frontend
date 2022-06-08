import { Component, Input, OnInit } from '@angular/core';
import { NewsListType } from '../../common/interfaces/news-list-type';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() news: NewsListType = {
    id: '',
    image: '',
    headLine: '',
    description: '',
    date: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
