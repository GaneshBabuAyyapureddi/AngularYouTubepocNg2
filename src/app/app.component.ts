import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';
import { CommentboxComponent } from "./commentbox/commentbox.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CommentboxComponent) commentboxData;
  show: boolean = true;
  public childData: string;
  public selectedVideoID: string;
  public selectedVideo: VideoObject;
  ngOnInit() {
    this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
    this.show = true;
    this.selectedVideoID = "abcd1234";
  }

  getVideo(video) {
    console.log('In app component video id' + video.id);
    this.childData = video.url;
    this.selectedVideo = video;
    this.selectedVideoID = video.id;
    console.log(this.selectedVideo.id);
    console.log(this.selectedVideo.type);

    if (this.selectedVideo.type == "video") {
      this.show = true;
    } else {
      this.show = false;
    }
    this.commentboxData.getvideoCommentData(this.selectedVideoID);

  }
}
