import { Component,Input } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public childData : string;
  public selectedVideoID : string;
  public selectedVideo: VideoObject;
  // public childData ='https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os';
  ngOnInit() {
    console.log(this.childData);
    this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
}

getVideo(video){
    console.log('In app component');
  
  this.childData = video.url;
  this.selectedVideo = video;
  this.selectedVideoID = video.id;
  console.log(this.selectedVideo.id);
}
  
}
