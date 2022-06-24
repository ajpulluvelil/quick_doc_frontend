import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicsType } from '../../../common/interfaces/clinics-type';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  @Input() clinic!: ClinicsType;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enableQuestionnaireView(): void {
    this.router.navigate(['public-site/landing/questionnaire']);
  }
}
