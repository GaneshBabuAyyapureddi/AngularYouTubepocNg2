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
     private _videoIDUrl: string = "assets/";
    constructor(private _http: Http){} 

    getVideoPlayerData(): Observable<VideoObject[]>{
        return this._http.get(this._videourl)
            .map((response:Response) =><VideoObject[]> response.json())
             .catch(this._errorHandler);
    }

  

   getComments(fileName):Observable<VideoCommentModel[]>{
        // this._videoIDUrl = this._videoIDUrl + fileName + "."+ "json";
         console.log ("filename :"+ fileName);
        console.log ("VideoIdurl is :"+ this._videoIDUrl);
    return this._http.get(fileName).map((response:Response)=><VideoCommentModel[]> response.json()).catch(this._errorHandler);
    
   }
     _errorHandler(error:Response){
        console.error(error);
        return Observable.throw(error || "Server Error")
    }


}