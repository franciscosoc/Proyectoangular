import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  Url = 'http://localhost:8079/accounts'

  constructor(private httpClient: HttpClient) {}

 public listar(clienteId: number):Observable<Account[]> {


      return this.httpClient.get<Account[]>(this.Url + '/customers/' + `${clienteId}`);
 }

}
