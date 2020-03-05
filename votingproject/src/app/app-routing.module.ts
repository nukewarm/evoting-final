import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Navigate } from './navigate.guard';
import { CandidateComponent } from './login/candidate.component';
import { OtherloginComponent } from './login/otherlogin.component';
import { CandidatecvComponent } from './login/candidatecv.component';
import { EcaComponent } from './login/eca.component';
import { AppliedvotersComponent } from './login/appliedvoters.component';
import { LogindetailsComponent } from './login/logindetails.component';
import { ViewcandidateComponent } from './login/viewcandidate.component';
import { VoterupasswordComponent } from './login/voterupassword.component';
import { ViewresultComponent } from './login/viewresult.component';
import { VotenowloginComponent } from './login/votenowlogin.component';
import { VoteComponent } from './login/vote.component';
import { CandiupasswordComponent } from './login/candiupassword.component';
import { VotebuttonsComponent } from './login/votebuttons.component';
import { AppliedcandidatesComponent } from './login/appliedcandidates.component';
import { EssComponent } from './login/ess.component';
import { GenvotingpassComponent } from './login/genvotingpass.component';
import { EnablevotingComponent } from './login/enablevoting.component';
import { CandidateviewresultComponent } from './login/candidateviewresult.component';

const routes: Routes = [
{path:"register",component:RegisterComponent,canActivate:[Navigate]},
  {path:"login",component:LoginComponent,canActivate:[Navigate]},
  {path:"home",component:HomeComponent,canActivate:[Navigate]},
  {path:"login2",component:OtherloginComponent,canActivate:[Navigate]},
  {path:"candidate",component:CandidateComponent,canActivate:[Navigate]},
  {path:"candidate/cv",component:CandidatecvComponent,canActivate:[Navigate]},
  {path:"eca",component:EcaComponent,canActivate:[Navigate]},
  {path:"eca/appliedvoters",component:AppliedvotersComponent,canActivate:[Navigate]},
  {path:"logindetails",component:LogindetailsComponent,canActivate:[Navigate]},
  {path:"viewcandidate",component:ViewcandidateComponent,canActivate:[Navigate]},
  {path:"voterpassword",component:VoterupasswordComponent,canActivate:[Navigate]},
  {path:"viewresult",component:ViewresultComponent,canActivate:[Navigate]},
  {path:"votelogin",component:VotenowloginComponent,canActivate:[Navigate]},
  {path:"vote",component:VoteComponent,canActivate:[Navigate]},
  {path:"ess",component:EssComponent,canActivate:[Navigate]},
  {path:"ess/genvotingpass",component:GenvotingpassComponent,canActivate:[Navigate]},
  {path:"ess/enablevoting",component:EnablevotingComponent,canActivate:[Navigate]},
  {path: "eca/appliedcandidates", component:AppliedcandidatesComponent,canActivate:[Navigate]},
  {path:"candiupassword",component:CandiupasswordComponent,canActivate:[Navigate]},
  {path:"candiviewresult",component:CandidateviewresultComponent,canActivate:[Navigate]},
  {path:"votebuttons",component:VotebuttonsComponent,canActivate:[Navigate]},
  
  {path:"**",redirectTo:"home"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Navigate]
})
export class AppRoutingModule { }
