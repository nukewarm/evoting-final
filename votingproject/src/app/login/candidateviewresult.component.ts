import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from '../model/candidate.repository';
import { NgForm, Form } from '@angular/forms';
import { Stations } from '../model/station.model';
import { StationRepository } from '../model/station.repository';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.scss']
})
export class CandidateviewresultComponent implements OnInit {

  submitted: boolean = false;
  constructor(public repo:CandidateRepository, public station: Stations, private stationRepo: StationRepository) {
   }

  ngOnInit() {
  }

  submit(form: NgForm) {
    this.submitted = true;
  }

  get areas():[]{
    return this.repo.getAllAreas();
  }

  get details(): [] {
    //console.log(this.repo.getCandidatesByRegion());
    return this.repo.getCandidatesByRegion();
  }

  setArea(area: string) {
    console.log(area);
  }

  findStation(form: NgForm) {
    if(form.valid) {
      console.log(this.station.stationid);
      this.repo.setCandidatesByRegion(this.station.stationid);
    }
  }

}
