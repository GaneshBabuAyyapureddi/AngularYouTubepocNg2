import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VideoIdService } from '../videos-id.service';
import { VideoObject } from '../video-object';



@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.css'],
  outputs: ['playListEvent'],
  providers: [VideoIdService]
})
export class PlaylistSidebarComponent implements OnInit {
  videoList: VideoObject[];

  playListEvent = new EventEmitter<string>();
  videoObj: VideoObject[];
  constructor(private _video: VideoIdService) {
  }

  ngOnInit() {
    this.playListEvent.emit("https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os");
    this._video.getVideoPlayerData().subscribe(videoObj => this.videoObj = videoObj);
  }

  onClickVideoFromPlayList(video) {
    console.log(this.videoObj[video].url);
    console.log(this.videoObj[video].type);
    this.playListEvent.emit(this.videoObj[video].url);
  }

}

