import { Input, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoObject } from '../video-object';


@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  @Input() videoUrl:string;

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit() {}
  }