import { RestDataSource } from './rest.datasource';
import { Users } from './users.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRepository {

    private unapprovedUsers: [];
    private approvedUsers: [];
    public user: Observable<Users>;

    constructor(private dataSource: RestDataSource) {
        dataSource.getUnapprovedUsers().subscribe(data => {
            this.unapprovedUsers = data;
        });
        dataSource.getApprovedUsers().subscribe(data => {
            this.approvedUsers = data;
        })
        //this.user = this.getUsersByAadhar("4NM16CS000");
    }


    saveUser(user: Users): Observable<Users> {
        return this.dataSource.registerUser(user);
    }

    getUnapprovedUsers(): [] {
        return this.unapprovedUsers;
    }

    getApprovedUsers(): [] {
        return this.approvedUsers;
    }

    getUsersByAadhar(aadhar: string) {
        this.user = this.dataSource.getUsersByAadhar(aadhar);/*.subscribe(data => {
             //this.user = data;
             console.log(this.user);
             t
             callback()
        });*/
        //console.log(this.user);
        return this.user;
    }

    deleteUser(aadhar: string) {
        return this.dataSource.deleteUser(aadhar);
    }
}