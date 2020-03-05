import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Account } from '../model/account.model';
import { AccountRepository } from '../model/account.repository';
import { UserRepository } from '../model/user.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  constructor(public account: Account, public accountRepo: AccountRepository, public userRepo: UserRepository) {

  }

  ngOnInit() { }

  onLogin(form: NgForm) {   //add import
    this.submitted = true;
  }

  validate(username: string, password: string) {
    console.log(username);
    console.log(password);
    sessionStorage.setItem("hasvoted","no");
    this.accountRepo.getAccount(username).subscribe(data => {
      if (data == null) {
        alert("Please enter correct username!");
        window.location.href = "/login";
      }
      else if (data.username == username) {
        if (data.password == password) 
          if (data.accounttype == "voter") {
            // console.log(data.username);
            // console.log(data.password);
            alert("Success!");
            sessionStorage.setItem("currentUser",data.username);
            console.log(sessionStorage.getItem("currentUser"));
            window.location.href = "/logindetails";
          }
          else {
            alert("Please log in as " + data.accounttype);
          }
        else {
          alert("Please enter correct password!");
          window.location.href = "/login";
        }
      }

    });
  }


}
