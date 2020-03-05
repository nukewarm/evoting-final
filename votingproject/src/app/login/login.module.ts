import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidateComponent } from './candidate.component';
import { OtherloginComponent } from './otherlogin.component';
import { EcaComponent } from './eca.component';
import { CandidatecvComponent } from './candidatecv.component';
import { AppliedvotersComponent } from './appliedvoters.component';
import { LogindetailsComponent } from './logindetails.component';
import { ViewcandidateComponent } from './viewcandidate.component';
import { VoterupasswordComponent } from './voterupassword.component';
import { ViewresultComponent } from './viewresult.component';
import { VotenowloginComponent } from './votenowlogin.component';
import { VoteComponent } from './vote.component';
import { CandiupasswordComponent } from './candiupassword.component';
import { VotebuttonsComponent } from './votebuttons.component';
import { AppliedcandidatesComponent } from './appliedcandidates.component';
import { EssComponent } from './ess.component';
import { GenvotingpassComponent } from './genvotingpass.component';
import { EnablevotingComponent } from './enablevoting.component';
import { CandidateviewresultComponent } from './candidateviewresult.component';



@NgModule({
  declarations: [LoginComponent, CandidateComponent, OtherloginComponent, EcaComponent, CandidatecvComponent, AppliedvotersComponent, LogindetailsComponent, ViewcandidateComponent, VoterupasswordComponent, ViewresultComponent, VotenowloginComponent, VoteComponent, CandiupasswordComponent, VotebuttonsComponent, AppliedcandidatesComponent, EssComponent, GenvotingpassComponent, EnablevotingComponent, CandidateviewresultComponent],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule,
    FormsModule
  ],
  exports: [LoginComponent,CandidateComponent,OtherloginComponent]
})
export class LoginModule { }
