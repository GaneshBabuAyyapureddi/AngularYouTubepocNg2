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

  videoObj: VideoObject[];
  constructor(private _video: VideoIdService) {  }

  ngOnInit() {
    this._video.getVideoPlayerData().subscribe(reslut => this.videoObj = reslut);
    //this.playListEvent.emit(this.videoObj[0]);
  }

  onClickVideoFromPlayList(position) {
    console.log(this.videoObj[position].url);
    console.log(this.videoObj[position].type);
    this.playListEvent.emit(this.videoObj[position]);
  }

}

