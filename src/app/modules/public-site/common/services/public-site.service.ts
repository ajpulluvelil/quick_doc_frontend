import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicSiteService {

  public isPositionFixedEnabled: boolean = false;

  constructor() { }

  set positionFixed(value: boolean) {
    this.isPositionFixedEnabled = value;
  }

  get positionFixed() {
    return this.isPositionFixedEnabled;
  }

  set clinic(value: any) {
    this.clinic = value;
  }

  get clinic() {
    return this.clinic;
  }
}
