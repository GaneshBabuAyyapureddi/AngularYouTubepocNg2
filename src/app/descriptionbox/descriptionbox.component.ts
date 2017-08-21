import { Component, OnInit, Input } from '@angular/core';
import { VideoObject } from '../video-object';

@Component({
  selector: 'app-descriptionbox',
  templateUrl: './descriptionbox.component.html',
  styleUrls: ['./descriptionbox.component.css']
})
export class DescriptionboxComponent implements OnInit {
  @Input() videoObject: VideoObject;

  constructor() { }

  ngOnInit() {
    console.log('description video obJect:' + this.videoObject);
  }
  likesincrementUp() {
    this.videoObject.noOfLikes = this.videoObject.noOfLikes += 1;
    console.log("likes up called");

  }
  dislikesdecrementDown() {
    this.videoObject.noOfDislikes = this.videoObject.noOfDislikes += 1;
    console.log("likes down called");

  }

}
