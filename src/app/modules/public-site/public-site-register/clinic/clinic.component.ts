import { Component, Input, OnInit } from '@angular/core';
import { ClinicsType } from '../../common/interfaces/clinics-type';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  @Input() clinic!: ClinicsType;

  constructor() { }

  ngOnInit(): void {
  }

}
