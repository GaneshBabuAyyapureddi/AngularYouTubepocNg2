import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import ' rxjs/add/operator/map ';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class VideoIdService{

    private _url: string = "assets/abcd1234.json"
    constructor(private _http: Http){} 

    getVideoIdData(){
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }
}