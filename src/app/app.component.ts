import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';
import { VideoIdService } from "./videos-id.service";
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommentboxComponent } from "./commentbox/commentbox.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VideoIdService]
})
export class AppComponent {
  @ViewChild(CommentboxComponent) commentboxData;
  show: boolean = true;
  public childData: string;
  public selectedVideoID: string;
  public selectedVideo: VideoObject;
  currentItem: number;
  public videosArray: VideoObject[];

  constructor(private _video: VideoIdService) { }

  ngOnInit() {
    this.show = true;
    this.currentItem = +localStorage.getItem('currentPlayingItem');
    this._video.getVideoPlayerData().subscribe(result => this.videosArray = result);
    if (this.currentItem == 0) {
      this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
      this.selectedVideoID = "abcd1234";
    }
    else {
      console.log('this.videosArray ',  this.videosArray);
      this.selectedVideo = this.videosArray[this.currentItem];
      this.childData = this.selectedVideo.url;
      this.selectedVideoID = this.selectedVideo.id;
    }
  }

  getVideo(selectedVideo) {
    this.childData = selectedVideo.url;
    this.selectedVideoID = selectedVideo.id;
    if (selectedVideo.type == "video") {
      this.show = true;
    } else {
      this.show = false;
    }
    this.commentboxData.getvideoCommentData(this.selectedVideoID);

  }
}
