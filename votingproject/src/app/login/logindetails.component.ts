import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.scss']
})
export class LogindetailsComponent implements OnInit {
public user: string;
  
  constructor() {  
    this.user = sessionStorage.getItem("currentUser");
    console.log(this.user);
  }
  check():boolean{
    if(this.user=="null"){
      
      return true;
    }
    return false;
  }
  ngOnInit() {
  }

}
