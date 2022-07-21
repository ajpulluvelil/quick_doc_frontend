import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'quick_doc_frontend';

  constructor(
    private metaService: Meta
  ) {
  }
  ngOnInit(): void {
    this.metaService.addTags([
      { name:'mobile-web-app-capable',content:"Yes"},
      { name: 'apple-mobile-web-app-capable', content: "Yes"},
      { name: 'apple-mobile-web-app-status-bar-style', content: "black-translucent"},
      { name: 'mobile-web-app-status-bar-style', content: "black-translucent"}
    ]);
  }
}
