import { Component, OnInit } from '@angular/core';
import { QuestionnaireList } from '../../common/utils/questionnaire-list';

@Component({
  selector: 'app-registration-questionnaire',
  templateUrl: './registration-questionnaire.component.html',
  styleUrls: ['./registration-questionnaire.component.scss']
})
export class RegistrationQuestionnaireComponent implements OnInit {

  questionnaire = QuestionnaireList;

  constructor() { }

  ngOnInit(): void {
    console.log('questionnaire', this.questionnaire)
  }

}
