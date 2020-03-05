import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Account } from './account.model';
import { RestDataSource } from './rest.datasource';
import { UserRepository } from './user.repository';
import { CandidateRepository } from './candidate.repository';
import { AccountRepository } from './account.repository';
import { StationRepository } from './station.repository';
import { Stations } from './station.model';
import { Candidate } from './candidate.model';

@NgModule({
  providers: [Account, RestDataSource, UserRepository, CandidateRepository, AccountRepository, StationRepository, Stations, Candidate],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ModelModule { }
