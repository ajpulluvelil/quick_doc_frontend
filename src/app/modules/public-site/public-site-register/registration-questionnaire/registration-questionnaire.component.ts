import { Component, OnInit } from '@angular/core';
import { CommonSuccessDataType } from 'src/app/modules/common/shared/interfaces/common-success-data-type';
import { QuestionnaireList } from '../../common/utils/questionnaire-list';

@Component({
  selector: 'app-registration-questionnaire',
  templateUrl: './registration-questionnaire.component.html',
  styleUrls: ['./registration-questionnaire.component.scss']
})
export class RegistrationQuestionnaireComponent implements OnInit {

  questionnaire = QuestionnaireList;
  isSubmitClicked: boolean = false;
  successData: CommonSuccessDataType = {
    imagePath: '',
    message: '',
    buttonText: '',
    routerLink: ''
  }
  constructor() { }

  ngOnInit(): void {
    console.log('successWindowData - 1', this.successData);
  }

  onSubmitClick(): void {
    this.isSubmitClicked = true;
    this.successData = {
      imagePath: '../../../../../../assets/images/questionnaireCompletedImageJPG.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      buttonText: 'Go back to home',
      routerLink: '/public-site/landing/home'
    }
    console.log('successWindowData - 2', this.successData);
  }

}
