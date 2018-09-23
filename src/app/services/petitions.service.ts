import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()
export class PetitionsService{
    public url:string;
  length: number;
    // public jsonObject:any;
    constructor(
        public _http:HttpClient
    ){
        this.url = "../assets/data.json";
        // this.jsonObject = JSON.parse(this.url);

    }

    getBook():Observable<any>{
       
        return this._http.get(this.url);
    }
   
}

