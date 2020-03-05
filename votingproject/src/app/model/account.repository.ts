import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Account } from '../model/account.model'

@Injectable()
export class AccountRepository {
    constructor(private datasource: RestDataSource){}

    saveAccount(account: Account): Observable<Account> {
        return this.datasource.createAccount(account);
    }

    getAccount(username: string): Observable<Account> {
        return this.datasource.getAccount(username);
    }

    getAccountByID(id: number): Observable<Account> {
        return this.datasource.getAccountById(id);
    }
}