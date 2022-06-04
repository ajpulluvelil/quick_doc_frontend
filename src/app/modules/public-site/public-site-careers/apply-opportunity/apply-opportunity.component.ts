import { Component, OnInit } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

@Component({
  selector: 'app-apply-opportunity',
  templateUrl: './apply-opportunity.component.html',
  styleUrls: ['./apply-opportunity.component.scss']
})
export class ApplyOpportunityComponent implements OnInit {

  careerAcceptableUploadFileTypes = ENVIRONMENT.MODULES.COMMON.CAREER.ACCEPTABLE_UPLOAD_FILE_TYPES;

  constructor() { }

  ngOnInit(): void { }

}
