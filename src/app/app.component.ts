import { Component, Input } from '@angular/core';
import { VideoObject } from './video-object';
import { CommentService } from './commentbox/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = true;
  public childData: string;
  public selectedVideoID: string;
  public selectedVideo: VideoObject;
  // public childData ='https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os';
  ngOnInit() {
    this.childData = "https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os";
    this.show = true;
    this.selectedVideoID = "abcd1234";
  }

  getVideo(selectedVideo) {
    console.log('In app component');
    this.childData = selectedVideo.url;
    this.selectedVideoID = selectedVideo.id;
    console.log(selectedVideo.id);
    console.log(selectedVideo.type);
    console.log(sessionStorage.getItem('selectedPos'));
    if (selectedVideo.type == "video") {
      this.show = true;
    } else {
      this.show = false;
    }

  }
}
