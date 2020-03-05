import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Candidate } from './candidate.model';
import { Account } from '../model/account.model'
import { Stations } from './station.model';

const PROTOCOL = "http";
const PORT = 8088;

@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    registerUser(user: Users): Observable<Users> {
        return this.http.post<Users>(this.baseUrl + "/register", user);
    }

    updateStation(station: Stations): Observable<Stations> {
        return this.http.put<Stations>(this.baseUrl + "/updatestation", station);
    }

    getCandidateDetails(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(this.baseUrl + "/viewcand");
    }

    getUserDetails(): Observable<Users[]> {
        return this.http.get<Users[]>(this.baseUrl + "/viewuser");

    }

    getAllDetails(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/viewall");
    }

    getUnapprovedUsers(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/viewunapproved");
    }

    getUsersByAadhar(aadhar: string): Observable<Users> {
        return this.http.get<Users>(this.baseUrl + "/viewaadhar/"+aadhar);
    }
    getAllAreas():Observable<[]>{
        return this.http.get<[]>(this.baseUrl + "/viewarea");
    }

    getCandidatesByRegion(area:string):Observable<[]>{
        return this.http.get<[]>(this.baseUrl+"/viewcandibyarea/"+area);
    }

    createAccount(account: Account): Observable<Account> {
        return this.http.post<Account>(this.baseUrl + "/saveaccount",account);
    }

    deleteUser(aadhar: string): Observable<Users> {
        console.log("Hi again");
        return this.http.delete<Users>(this.baseUrl + "/delete/"+aadhar);
    }

    getAccount(username: string): Observable<Account> {
        return this.http.get<Account>(this.baseUrl + "/viewaccount/"+username);
    }

    getAccountById(id: number): Observable<Account> {
        return this.http.get<Account>(this.baseUrl + "/viewaccbyid/"+id);
    }

    getApprovedUsers(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/viewapproved");
    }

    getUnapprovedCandidates(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/unapcandi");
    }

    getUnactivatedStations(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/stationinfo");
    }

    getActivatedStations(): Observable<[]> {
        return this.http.get<[]>(this.baseUrl + "/activatedstations");
    }

    getStations(id: string): Observable<Stations> {
        return this.http.get<Stations>(this.baseUrl + "/viewstation/"+id);
    }

    getAllStations(): Observable<Stations[]> {
        return this.http.get<Stations[]>(this.baseUrl + "/allstations");
    }

    getCandiById(id: number): Observable<Candidate> {
        return this.http.get<Candidate>(this.baseUrl + "/viewcandi/"+id);
    }

    updateCandidate(candidate: Candidate): Observable<Candidate> {
        return this.http.put<Candidate>(this.baseUrl + "/updatecandi",candidate);
    }

}