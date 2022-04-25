import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicSiteApiService {

  constructor(
    public http: HttpClient
  ) { }

  // getCountriesList(): Promise<Object>{
  //   return this.http.get('https://restcountries.com/v3.1/all').toPromise().then();
  // }

  getCountriesList(): Observable<any> {
    const apiURL = `https://restcountries.com/v3.1/all`;
    return this.http.get(apiURL)
  }
}

