import { Candidate } from './candidate.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Users } from './users.model';

@Injectable()
export class CandidateRepository {

    private candidates: Candidate[] = [];
    private unapprovedCandidates: [];
    private candidatedetails: Users[] = [];
    private details: [];
    private areas: [];
    private candidateVoteDetails: [];
    constructor(private dataSource: RestDataSource) {
        dataSource.getCandidateDetails().subscribe(data => {
            this.candidates = data;
            // console.log((JSON.stringify(data)));
            //console.log(this.candidates);
        });
        dataSource.getUserDetails().subscribe(data2 => {
            this.candidatedetails = data2;
            //  console.log(JSON.stringify(data2));
            //console.log(this.candidatedetails);
        });
        dataSource.getAllDetails().subscribe(data2 => {
            this.details = data2;
            //  console.log(JSON.stringify(data2));
            //console.log(this.candidatedetails);
        });
        //console.log(this.candidates);
        //console.log(this.candidatedetails);
        dataSource.getAllAreas().subscribe(data2 => {
            this.areas = data2;
            //  console.log(JSON.stringify(data2));
            //console.log(this.candidatedetails);
        });
        // dataSource.getCandidatesByRegion().subscribe(data2=>{
        //     this.candibyregion=data2;
        // });
        dataSource.getUnapprovedCandidates().subscribe(data => {
            this.unapprovedCandidates = data;
        })
    }

    viewCandidates(): Candidate[] {

        return this.candidates;
    }

    viewUsers(): Users[] {

        return this.candidatedetails;
    }

    getAllDetails(): [] {
        return this.details;
    }
    getAllAreas(): [] {
        return this.areas;

    }
    setCandidatesByRegion(area: string) {
        this.dataSource.getCandidatesByRegion(area).subscribe(data => {
            this.candidateVoteDetails = data;
        });
    }

    getCandidatesByRegion() {
        return this.candidateVoteDetails;
    }

    getUnapprovedCandidates(): [] {
        return this.unapprovedCandidates;
    }

    updateCandidate(candidate: Candidate) {
        return this.dataSource.updateCandidate(candidate);
    }

}