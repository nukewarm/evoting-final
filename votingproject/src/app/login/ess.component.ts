import { Component, OnInit } from '@angular/core';
import { StationRepository } from '../model/station.repository';

@Component({
  selector: 'app-ess',
  templateUrl: './ess.component.html',
  styleUrls: ['./ess.component.scss']
})
export class EssComponent implements OnInit {

  constructor(public stationRepo: StationRepository) { }

  ngOnInit() {
  }
  disableVoting() {
    this.stationRepo.viewAllStation().forEach(d =>{
      d.enabled = false;
      this.stationRepo.saveStation(d).subscribe();
    });
    alert("Voting disabled!");
  }

  deletePassword() {
    this.stationRepo.viewAllStation().forEach(d =>{
      d.stationpassword = null;
      this.stationRepo.saveStation(d).subscribe();
    });
    alert("All passwords cleared!");
  }

}
