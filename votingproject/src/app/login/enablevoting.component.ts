import { Component, OnInit } from '@angular/core';
import { StationRepository } from '../model/station.repository';
import { Stations } from '../model/station.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-enablevoting',
  templateUrl: './enablevoting.component.html',
  styleUrls: ['./enablevoting.component.scss']
})
export class EnablevotingComponent implements OnInit {

  constructor(private stationRepo: StationRepository,private station: Stations,private datasource: RestDataSource) { }

  ngOnInit() {
  }

  get stationDetails(): [] {
    return this.stationRepo.viewActivatedStations();
  }

  enableStation(id: string) {
    console.log(id);
    this.datasource.getStations(id).subscribe(data => {
      this.station = data;
      this.station.enabled = true;
      console.log(this.station);
      this.stationRepo.saveStation(this.station).subscribe();
      window.location.href = "/ess/enablevoting";
    })
  }

}
