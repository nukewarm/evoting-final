import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from '../model/candidate.repository';
import { Stations } from '../model/station.model';
import { Candidate } from '../model/candidate.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  public id: string;
  public selected: string;
  public candiID: number;
  constructor(private repo: CandidateRepository, public station: Stations, public dataSource: RestDataSource, public candidate: Candidate) {
  }

  ngOnInit() {
    this.id = sessionStorage.getItem("currentUserStationID");
    this.repo.setCandidatesByRegion(sessionStorage.getItem("currentUserStationID"));
    this.selected = null;
  }
  get areas(): [] {
    return this.repo.getAllAreas();
  }
  get candibyregions(): [] {
    return this.repo.getCandidatesByRegion();
  }
  updateVotes() {
    this.dataSource.getCandiById(this.candiID).subscribe(data => {
      this.candidate = data;
      console.log(this.candidate);
      if (confirm("Do you want to submit vote?")) {
        this.candidate.votes += 1;
        this.repo.updateCandidate(this.candidate).subscribe();
        console.log(sessionStorage.getItem("currentUser"));
        sessionStorage.removeItem("currentUserStationID");
        sessionStorage.setItem("currentUser",null);
        console.log(sessionStorage.getItem("currentUser"));
        window.location.href = "/logindetails";
      }
    });
  }
  setChosenCandi(chosen: string, id: number) {
    this.selected = chosen;
    this.candiID = id;
    console.log(chosen, id);
  }

}
