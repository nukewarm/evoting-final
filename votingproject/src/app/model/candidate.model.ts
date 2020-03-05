import { Injectable } from '@angular/core';

@Injectable()
export class Candidate
{
    public userid:number;
    public party:string;
    public area:string;
    public votes:number;
    public rank:number;
    public promises:string;
}