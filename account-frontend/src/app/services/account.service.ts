import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransactionOdt } from '../models/TransactionsOdt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getTransactionsOfAccount(idAccount: number): Observable<TransactionOdt[]> {
    return this.http.get<TransactionOdt[]>(`${environment.urlBackend}/api/accounts/${idAccount}/transactions`);
  }
}
