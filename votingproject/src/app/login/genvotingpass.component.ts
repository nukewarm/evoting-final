import { Component, OnInit } from '@angular/core';
import { StationRepository } from '../model/station.repository';
import { Stations } from '../model/station.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-genvotingpass',
  templateUrl: './genvotingpass.component.html',
  styleUrls: ['./genvotingpass.component.scss']
})
export class GenvotingpassComponent implements OnInit {

  constructor(private stationRepo: StationRepository, private station: Stations, private datasource: RestDataSource) { }

  ngOnInit() {
  }

  get stationDetails(): [] {
    return this.stationRepo.viewUnactivatedStations();
  }

  generatePassword(id: string) {
    console.log(id);
    this.datasource.getStations(id).subscribe(data => {
      this.station = data;
      this.station.stationpassword = Math.random().toString(36).substr(2, 8);
      console.log(this.station);
      this.stationRepo.saveStation(this.station).subscribe();
      window.location.href = "/ess/genvotingpass";
    })
  }

}
