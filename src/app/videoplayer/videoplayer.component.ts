import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
})
export class VideoplayerComponent implements OnInit {

    @Input() videoUrl: string;

constructor() { 

  this.videoUrl = 'https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os';

  
  }
  ngOnInit() {
    console.log(this.videoUrl) // => 'joining'
  }

  playThisVideo(newVideoUrl){
  this.videoUrl = newVideoUrl;
   console.log(this.videoUrl) // => 'playThisVideo'


  }

  }