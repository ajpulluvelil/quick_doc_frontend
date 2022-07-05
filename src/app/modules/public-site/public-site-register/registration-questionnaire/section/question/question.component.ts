import { Component, Input, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/modules/public-site/common/enum/question-type';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  @Input() isDividerInVisible: boolean = false;
  questionEnumType = QuestionType;
  props: any;

  constructor() { }

  ngOnInit(): void {
  }

}
