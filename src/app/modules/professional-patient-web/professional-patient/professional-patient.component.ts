import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-patient',
  templateUrl: './professional-patient.component.html',
  styleUrls: ['./professional-patient.component.scss']
})
export class ProfessionalPatientComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/professional/web/dashboard']);
  }

}
