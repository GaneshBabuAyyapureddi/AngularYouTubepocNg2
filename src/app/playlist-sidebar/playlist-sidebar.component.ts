import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { VideoIdService } from "../videos-id.service";
import { VideoObject } from '../video';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.css'],
  outputs:['playListEvent'],
  providers: [VideoIdService]
})
export class PlaylistSidebarComponent implements OnInit {
  videoList: VideoObject[];
  filename = "./assets/videos.json";

  playListEvent = new EventEmitter<string>();

  constructor(private _videoIdService: VideoIdService) { }

  ngOnInit() {
        this.playListEvent.emit("https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os");
        
        this._videoIdService.getVideoIdData(this.filename)
      .subscribe(iproducts => this.videoList = iproducts);
  }

  onClickVideoFromPlayList(video) {
    console.log(this.videoList[video].url);
    this.playListEvent.emit(this.videoList[video].url);
    
  } 

}
