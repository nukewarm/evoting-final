import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from '../model/account.model';
import { AccountRepository } from '../model/account.repository';

@Component({
  selector: 'app-otherlogin',
  templateUrl: './otherlogin.component.html',
  styleUrls: ['./otherlogin.component.scss']
})
export class OtherloginComponent implements OnInit {

  submitted: boolean = false;
  constructor(public account: Account, private accountRepo: AccountRepository) {

  }

  ngOnInit() {
  }
  onLogin(form: NgForm) {   //add import
    this.submitted = true;

  }

  validate(username: string, password: string) {
    console.log(username);
    console.log(password);
    this.accountRepo.getAccount(username).subscribe(data => {
      if (data == null) {
        alert("Please enter correct username!");
        window.location.href = "/login";
      }
      else if (data.username == username) {
        if (data.password == password) {
          if (data.accounttype == "candidate") {
            alert("Logged in as candidate!");
            sessionStorage.setItem("currentUser",data.username);
            window.location.href = "/candidate";
          }
          else if(data.accounttype == "ess") {
            alert("Logged in as ESS!");
            sessionStorage.setItem("currentUser",data.username);
            window.location.href = "/ess";
          }
          else if(data.accounttype == "eca") {
            alert("Logged in as ECA!");
            sessionStorage.setItem("currentUser",data.username);
            window.location.href = "/eca";
          }
          else {
            alert("Please log in as " + data.accounttype);
          }
        }
        else {
          alert("Please enter correct password!");
          window.location.href = "/login2";
        }
      }

    });

  }
}