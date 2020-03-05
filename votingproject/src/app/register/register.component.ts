import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { UserRepository } from '../model/user.repository';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted:boolean=false;
  constructor(public user: Users, public repository: UserRepository) { }
  
  ngOnInit() {
  }

  onClick(form: NgForm) {
    if(form.valid) {
      this.repository.saveUser(this.user).subscribe();
      this.onSub();
      
    }
  }
  submitRegister(form: NgForm){   //add import
    this.submitted=true;
  }

  onSub(){  
  alert("Successfully registered! Postal mail will be sent soon!!");
  window.location.href='/login';
  this.user.clear();
  }
}
