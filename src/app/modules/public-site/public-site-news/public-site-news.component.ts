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
  isIndividualArticleSelected: boolean = false;
  selectedArticle: NewsListType = {
    id: '',
    image: '',
    headLine: '',
    description: '',
    date: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.newsList = NewsLists;
    this.findFocusedArticle(this.newsList)
  }

  findFocusedArticle(newsList: Array<NewsListType>): void {
    if (newsList && newsList.length > 0) {
      this.focusedArticle = newsList.find(news => news.focusedItem);
      if (!this.focusedArticle) {
        this.newsList[0].focusedItem = true;
        this.focusedArticle = newsList[0];
      }
    }
  }

  selectArticle(article: NewsListType): void {
    this.isIndividualArticleSelected = true;
    this.selectedArticle = article;
  }

  individualArticleDisabled(): void {
    this.isIndividualArticleSelected = false;
  }

}
