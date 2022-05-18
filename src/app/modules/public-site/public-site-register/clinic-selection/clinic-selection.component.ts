import { Component, OnInit } from '@angular/core';
import { ClinicsType } from '../../common/interfaces/clinics-type';
import { clinicList } from '../../common/utils/clinics-list';

@Component({
  selector: 'app-clinic-selection',
  templateUrl: './clinic-selection.component.html',
  styleUrls: ['./clinic-selection.component.scss']
})
export class ClinicSelectionComponent implements OnInit {

  clinics: ClinicsType[] = clinicList;

  constructor() { }

  ngOnInit(): void {
  }

}
