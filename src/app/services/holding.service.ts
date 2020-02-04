import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Holding } from '../models/holding';
import { CurrentPrices } from '../models/stock-prices';

@Injectable({
  providedIn: 'root'
})
export class HoldingService {
  private _baseUrl: string = 'http://localhost:4200/api/holding/';

  constructor(private httpClient: HttpClient) { }

  public getHoldings(): Observable<Holding[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get<Holding[]>(this._baseUrl + 'get');
  }
}
