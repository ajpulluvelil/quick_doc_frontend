import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from 'src/environments/environment';
import { OpportunitiesResponse } from '../interfaces/opportunities-response';

@Injectable({
  providedIn: 'root'
})
export class PublicSiteApiService {

  apiEndPoint = ENVIRONMENT.IP

  constructor(
    public http: HttpClient
  ) { }

  getAllOpportunities(): Observable<OpportunitiesResponse[]> {
    const apiURL = this.apiEndPoint + '/api/v1/opportunities';
    return this.http.get<OpportunitiesResponse[]>(apiURL);

  }

  getCountriesList(): Observable<any> {
    const apiURL = `https://restcountries.com/v3.1/all`;
    return this.http.get(apiURL)
  }
}

