import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _baseUrl: string = 'http://localhost:4200/api/company/';

  constructor(private httpClient: HttpClient) { }

  public getCompanies(): Observable<Company[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get<Company[]>(this._baseUrl + 'get');
  }

  public saveCompany(company: Company) {

    let param = JSON.stringify(company);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<Company>(this._baseUrl + 'new', param, httpOptions);
  }
}
