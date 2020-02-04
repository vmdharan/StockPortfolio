import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentPrices } from '../models/stock-prices';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private _baseUrl: string = 'http://localhost:4200/api/prices/';

  constructor(private httpClient: HttpClient) { }

  public savePrices(stockPrices: CurrentPrices[]) {

    let param = JSON.stringify(stockPrices);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<CurrentPrices[]>(this._baseUrl + 'new', param, httpOptions);
  }
}
