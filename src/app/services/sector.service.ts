import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private _baseUrl: string = 'http://localhost:4200/api/sector/';

  constructor(private httpClient: HttpClient) { }

  public getSectors(): Observable<Sector[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get<Sector[]>(this._baseUrl + 'get');
  }

  public saveSector(sector: Sector) {

    let param = JSON.stringify(sector);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<Sector>(this._baseUrl + 'new', param, httpOptions);
  }
}

