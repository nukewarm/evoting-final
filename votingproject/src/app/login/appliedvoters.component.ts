import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../model/user.repository';
import { Account } from '../model/account.model'
import { Users } from '../model/users.model'
import { Observable } from 'rxjs';
import { AccountRepository } from '../model/account.repository';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-appliedvoters',
  templateUrl: './appliedvoters.component.html',
  styleUrls: ['./appliedvoters.component.scss']
})
export class AppliedvotersComponent implements OnInit {

  constructor(private repo: UserRepository, private dataSource: RestDataSource, private account: Account,
    private user: Users, private accrepo: AccountRepository) {
    this.user = null;
    this.account.username = null;
    this.account.password = null;
    this.account.accounttype = "voter";
    this.account.userid = null;
  }

  ngOnInit() { }

  get appliedVoters(): [] {
    return this.repo.getUnapprovedUsers();
  }

  validateUser(adr: string) { //assuming approval is happenning elsewhere
    this.dataSource.getUsersByAadhar(adr).subscribe(data => {
      this.user = data;
      this.account.username = Math.random().toString(36).substr(2, 8);
      this.account.password = Math.random().toString(36).substr(2, 8);
      this.account.accounttype = "voter";
      this.account.userid = this.user.userid;
      this.accrepo.saveAccount(this.account).subscribe();
      window.location.href="/eca/appliedvoters";
    });
  }

  rejectUser(adr: string) {
    this.repo.deleteUser(adr).subscribe();
    window.location.href="/eca/appliedvoters";
  }

}