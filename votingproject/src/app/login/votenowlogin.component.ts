import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { Account } from '../model/account.model';
import { Stations } from '../model/station.model';
import { NgForm } from '@angular/forms';
import { UserRepository } from '../model/user.repository';
import { AccountRepository } from '../model/account.repository';
import { StationRepository } from '../model/station.repository';

@Component({
  selector: 'app-votenowlogin',
  templateUrl: './votenowlogin.component.html',
  styleUrls: ['./votenowlogin.component.scss']
})
export class VotenowloginComponent implements OnInit {
  submitted: boolean = false;
  constructor(public user: Users, public account: Account, private station: Stations, public userRepo: UserRepository, public accRepo: AccountRepository, public stationRepo: StationRepository) {
    this.station.stationpassword = null;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
  }

  validate(form: NgForm) {
    if (form.valid) {
      // console.log(this.station);
      // console.log(this.user.aadhar);
      this.userRepo.getUsersByAadhar(this.user.aadhar).subscribe(userData => {
        if (userData == null) {
          alert("Aadhar is invalid!");
          window.location.href="/votelogin";
        }
        else {
          if (userData.aadhar == this.user.aadhar) {
            //console.log(data.userid);
            this.accRepo.getAccountByID(userData.userid).subscribe(accountData => {
              if(accountData.password == this.account.password) {
                // console.log(userData.stationid);
                // console.log(this.stationRepo.viewStationById(userData.stationid));
                if(this.station.stationpassword == this.stationRepo.viewStationById(userData.stationid).stationpassword) {
                  sessionStorage.setItem("currentUserStationID",userData.stationid);
                  window.location.href="/vote";
                }
                else {
                  alert("Voting password is wrong!");
                }
              }
              else {
                alert("Password is wrong!");
              }
            });
          }
        }
      });
    }
  }

}
