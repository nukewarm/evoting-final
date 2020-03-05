import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from '../model/candidate.repository';
import { Account } from '../model/account.model';
import { RestDataSource } from '../model/rest.datasource';
import { Users } from '../model/users.model';
import { AccountRepository } from '../model/account.repository';

@Component({
  selector: 'app-appliedcandidates',
  templateUrl: './appliedcandidates.component.html',
  styleUrls: ['./appliedcandidates.component.scss']
})
export class AppliedcandidatesComponent implements OnInit {

  constructor(private candiRepo: CandidateRepository, private account: Account, private dataSource: RestDataSource, private user: Users, 
    private accRepo: AccountRepository) {
    this.account.username = null;
    this.account.password = null;
    this.account.accounttype = "candidate";
    this.account.userid = null;
   }

  ngOnInit() {
  }

  get appliedCandidates() {
    return this.candiRepo.getUnapprovedCandidates();
  }

  generateAccount(adr: string) {
    console.log(adr);
    this.dataSource.getUsersByAadhar(adr).subscribe(data => {
      this.user = data;
      this.account.username = Math.random().toString(36).substr(2, 8);
      this.account.password = Math.random().toString(36).substr(2, 8);
      this.account.accounttype = "candidate";
      this.account.userid = this.user.userid;
      console.log(this.user); 
      console.log(this.account);
      this.accRepo.saveAccount(this.account).subscribe();
      window.location.href="/eca/appliedcandidates";
    });

  }
}