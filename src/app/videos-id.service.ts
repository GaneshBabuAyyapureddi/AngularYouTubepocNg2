import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';
import { VideoObject } from './video';

@Injectable()
export class VideoIdService{

    // private _url: string = "./assets/videos.json"
    constructor(private _http: Http){} 

    getVideoIdData(filenameUrl): Observable<VideoObject[]> {
      return this._http.get(filenameUrl)
      .map((response: Response) => <VideoObject[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}