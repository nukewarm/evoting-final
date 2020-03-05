import { Injectable } from '@angular/core';

@Injectable()
export class Account {
    public username: string;
    public password: string;
    public accounttype: string;
    public userid: number;

    public clear() {
        this.username = this.password = this.accounttype = null;
        this.userid = null;
    }
}