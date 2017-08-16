import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { VideoObject } from './video-object';
import { VideoCommentModel } from './video-comments-model';
import {Observable} from 'rxjs/Rx';
// import { VideoObject } from './video';

@Injectable()
export class VideoIdService{

    private _videourl: string = "assets/videos.json"
    constructor(private _http: Http){} 

    getVideoPlayerData(): Observable<VideoObject[]>{
        return this._http.get(this._videourl)
            .map((response:Response) =><VideoObject[]> response.json());
    }

    // fetchVideoCommentsData(filename): Observable<VideoCommentModel[]>{

    //     private  _videoIdCommetData: string ="assets/"
    // }
    


}