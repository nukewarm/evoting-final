import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { NgForm } from '@angular/forms';
import { AccountRepository } from '../model/account.repository';

@Component({
  selector: 'app-voterupassword',
  templateUrl: './voterupassword.component.html',
  styleUrls: ['./voterupassword.component.scss']
})
export class VoterupasswordComponent implements OnInit {

  public submitted: boolean = false;
  public newpass: string;
  public renewpass: string;
  constructor(public account: Account, public accRepo: AccountRepository) { }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
  }

  validate(form: NgForm) {
      if(form.valid) {
        console.log(this.newpass);
        console.log(this.renewpass);
        console.log(this.account.password);
        console.log(this.account.username);
        this.accRepo.getAccount(this.account.username).subscribe(data => {
          if(data == null) {
            alert("Please enter correct username!");
          }
          else {
            if(data.password == this.account.password) {
              if(this.newpass == this.renewpass) {
                data.password = this.newpass;
                this.accRepo.saveAccount(data).subscribe();
                alert("Successfully updated!");
                window.location.href = "/logindetails"
              }
              else {
                alert("Please ensure passwords match!");
              }
            }
            else {
              alert("Please enter correct password!");
            }
          }

        });
    }
  }

}
