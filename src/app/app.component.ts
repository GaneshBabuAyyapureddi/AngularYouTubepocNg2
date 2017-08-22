import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';
import { VideoIdService } from "./videos-id.service";
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommentboxComponent } from "./commentbox/commentbox.component";
import { PlaylistSidebarComponent } from "./playlist-sidebar/playlist-sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(CommentboxComponent) commentboxData;
  @ViewChild(PlaylistSidebarComponent) playlistComponentObject;

  show: boolean = true;
  public childData: string;
  public selectedVideoID: string;
  public selectedVideo: VideoObject;
  currentItem: number;
   proper:any;   
    constructor() {
        this.proper = [{}, { collapsible: true,  resizable: true }]; 
        }   
  // public childData ='https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os';
  ngOnInit() {
    this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
  }

  ngAfterViewInit() {
    this.show = true;
    this.currentItem = +localStorage.getItem('currentPlayingItem');
    if (this.currentItem == 0) {
      this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
      this.selectedVideoID = "abcd1234";
    }
    else {
      console.log('this.videoObj:',  this.playlistComponentObject.getVideosArray());
      this.selectedVideo = this.playlistComponentObject.videoObj[this.currentItem];
      this.childData = this.selectedVideo.url;
      this.selectedVideoID = this.selectedVideo.id;
    }
  }

  // ngOnInit() {
  //   this.show = true;
  //   this.currentItem = +localStorage.getItem('currentPlayingItem');
  //   if (this.currentItem == 0) {
  //     this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
  //     this.selectedVideoID = "abcd1234";
  //   }
  //   else {
  //     console.log('this.videoObj 1:',  this.playlistComponentObject.getVideosArray());
  //     this.selectedVideo = this.playlistComponentObject.videoObj[this.currentItem];
  //     this.childData = this.selectedVideo.url;
  //     this.selectedVideoID = this.selectedVideo.id;
  //   }
  // }

  getVideo(selectedVideo) {
    this.childData = selectedVideo.url;
    this.selectedVideoID = selectedVideo.id;
    this.selectedVideo = selectedVideo;
    if (selectedVideo.type == "video") {
      this.show = true;
    } else {
      this.show = false;
    }
    this.commentboxData.getvideoCommentData(this.selectedVideoID);
  }
  }
