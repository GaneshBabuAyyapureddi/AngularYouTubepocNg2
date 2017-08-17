import { Component,Input } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = true;
  public childData : string;
  public selectedVideoID : string;
  public selectedVideo: VideoObject;
  public selectedVideoLikes: string;  
  // public childData ='https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os';
  ngOnInit() {
    this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
    this.show = true;   
}

getVideo(video){
  console.log('In app component'+video);  
  this.childData = video.url;
  this.selectedVideo = video;
  this.selectedVideoID = video.id;
  this.selectedVideoLikes = video.noOfLikes;  
  console.log(this.selectedVideo.id);
  console.log(this.selectedVideo.type);
  if(this.selectedVideo.type == "video"){
    this.show = true; 
  }else{
    this.show = false; 
  }
}
  
}
