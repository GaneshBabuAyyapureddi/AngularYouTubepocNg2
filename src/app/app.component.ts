import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';
import { CommentboxComponent } from "./commentbox/commentbox.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(CommentboxComponent) testClass;
  @ViewChild(CommentboxComponent) commentboxData;
  show: boolean = true;
  public childData: string;
  public selectedVideoID: string;
  public selectedVideo: VideoObject;
  private initalVideoObj;

  constructor() {
     this.initalVideoObj= {
      "id": "abcd1234",
      "url": "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os",
      "description": "Learn Webpack 2 - what it is, how it works and how to use it!",
      "title": "WHAT IS WEBPACK, HOW DOES IT WORK? | Webpack 2 Basics Tutorial",
      "noOfLikes": 5689,
      "noOfDislikes": 4579,
      "noOfViews": 15423,
      "dateCreated": "12/05/1990",
      "thumbnailImage": "http://lexhindustan.com/wp-content/uploads/2017/07/placeholder_600x450.jpg",
      "uploadedBy": "Hasina", 
      "type": "video",
      "icon":"http://lorempixel.com/200/200/sports/1/"
      }
    }
    ngOnInit() {
    
    this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
    this.show = true;
    this.selectedVideo = this.initalVideoObj;
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
    this.testClass.enableSubmit();
    this.commentboxData.getvideoCommentData(this.selectedVideoID);

  }
}
