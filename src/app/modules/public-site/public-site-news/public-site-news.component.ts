import { Component, OnInit } from '@angular/core';
import { NewsListType } from '../common/interfaces/news-list-type';
import { NewsLists } from '../common/utils/news-lists';

@Component({
  selector: 'app-public-site-news',
  templateUrl: './public-site-news.component.html',
  styleUrls: ['./public-site-news.component.scss']
})
export class PublicSiteNewsComponent implements OnInit {

  newsList: Array<NewsListType> = [];
  focusedArticle: NewsListType | undefined;

  constructor() { }

  ngOnInit(): void {
    this.newsList = NewsLists;
    this.findFocusedArticle(this.newsList)
  }

  findFocusedArticle(newsList: Array<NewsListType>): void {
    this.focusedArticle = newsList.find(news => news.focusedItem);
  }

}
