import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from 'src/environments/environment';
import { OpportunitiesResponse } from '../classes/opportunities-response';

@Injectable({
  providedIn: 'root'
})
export class PublicSiteApiService {

  apiEndPoint = ENVIRONMENT.IP

  constructor(
    public http: HttpClient
  ) { }

  getAllOpportunities(): Observable<OpportunitiesResponse[]> {
    return this.http.get<OpportunitiesResponse[]>(`${this.apiEndPoint}/api/v1/opportunities`);
  }

  createNewPatientUser(): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/api/v1/self-registration`);
  }

  getCountriesList(): Observable<any> {
    const apiURL = `https://restcountries.com/v3.1/all`;
    return this.http.get(apiURL)
  }
}

