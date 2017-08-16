import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VideoIdService } from '../videos-id.service';
import { VideoObject } from '../video-object';



@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.css'],
  //outputs: ['playListEvent'],
  providers: [VideoIdService]
})
export class PlaylistSidebarComponent implements OnInit {
  @Output() playListEvent = new EventEmitter<VideoObject>();
  videoList: VideoObject[];
  filename = "./assets/videos.json";

  // playListEvent = new EventEmitter<string>();
  videoObj: VideoObject[];
  constructor(private _video: VideoIdService) { }

  ngOnInit() {
    this._video.getVideoPlayerData().subscribe(videoObj => this.videoObj = videoObj);
    //this.playListEvent.emit(this.videoObj[0]);
  }

  onClickVideoFromPlayList(video) {
    console.log(this.videoObj[video]);
    this.playListEvent.emit(this.videoObj[video]);

  }

}
