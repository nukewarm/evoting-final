import { Injectable } from '@angular/core';
import { Account } from './account.model';

export class Users {
    public userid: number;
    public name: string;
    public address: string;
    public aadhar: string;
    public stationid: string;
    public gender: string;
    public dob: Date;
    public image: string;

    public clear()
    {
        this.userid=null;
        this.name=null;
        this.address=null;
        this.aadhar=null;
        this.stationid=null;
        this.gender=null;
        this.dob=null;
        this.image=null;
    }
}