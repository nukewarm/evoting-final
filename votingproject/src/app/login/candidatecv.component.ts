import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from '../model/candidate.repository';
import { Users } from '../model/users.model';
import { Candidate } from '../model/candidate.model';

@Component({
  selector: 'app-candidatecv',
  templateUrl: './candidatecv.component.html',
  styleUrls: ['./candidatecv.component.scss']
})
export class CandidatecvComponent implements OnInit {

  constructor(private repo: CandidateRepository) { }

  ngOnInit() {
  }

  get candidate(): Candidate[] {
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
