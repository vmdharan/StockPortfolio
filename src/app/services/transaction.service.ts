import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _baseUrl: string = 'http://localhost:4200/api/transaction/';

  constructor(private httpClient: HttpClient) { }

  public getTransactions(): Observable<Transaction[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get<Transaction[]>(this._baseUrl + 'get');
  }

  public saveTransaction(transaction: Transaction) {

    let param = JSON.stringify(transaction);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<Transaction>(this._baseUrl + 'new', param, httpOptions);
  }
}
