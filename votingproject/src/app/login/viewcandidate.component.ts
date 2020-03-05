import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate.model';
import { CandidateRepository } from '../model/candidate.repository';
import { Users } from '../model/users.model';

@Component({
  selector: 'app-viewcandidate',
  templateUrl: './viewcandidate.component.html',
  styleUrls: ['./viewcandidate.component.scss']
})
export class ViewcandidateComponent implements OnInit {

  constructor(private repo: CandidateRepository) { }

  ngOnInit() {
  }
  get candidates(): Candidate[] {
    return this.repo.viewCandidates();
  }

  get details(): [] {
    //let pageIndex = (this.selectedPage - 1) * this.candidatesPerPage;
    return this.repo.getAllDetails();
  }

  get users(): Users[] {
    //let pageIndex = (this.selectedPage - 1) * this.candidatesPerPage;
    // console.log(this.repo.viewUsers());
    return this.repo.viewUsers();
  }

 

}
