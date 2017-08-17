import { Component, OnInit, Input } from '@angular/core';
import { VideoObject } from '../video-object';

@Component({
  selector: 'app-descriptionbox',
  templateUrl: './descriptionbox.component.html',
  styleUrls: ['./descriptionbox.component.css']
})
export class DescriptionboxComponent implements OnInit {
  @Input() videoObject:VideoObject;
  
  constructor() { }

  ngOnInit() {
    console.log(this.videoObject);
  }

}
