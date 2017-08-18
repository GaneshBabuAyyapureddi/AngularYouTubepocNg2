import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { VideoIdService } from '../videos-id.service';
import { VideoObject } from '../video-object';
import { trigger, state, style, animate, transition, keyframes, sequence } from '@angular/animations';



@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.css'],
  //outputs: ['playListEvent'],
  providers: [VideoIdService],
  animations: [
    trigger('anim', [        
        transition('void => active', [
          style({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
          sequence([
            animate(".1s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
            animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'  }))
          ])
        ])
    ])
  ]
})
export class PlaylistSidebarComponent implements OnInit {
  @Output() playListEvent = new EventEmitter<VideoObject>();
  state: string = 'active';

  videoObj: VideoObject[];
  constructor(private _video: VideoIdService) { }

  ngOnInit() {
    this._video.getVideoPlayerData().subscribe(reslut => this.videoObj = reslut);
    //this.playListEvent.emit(this.videoObj[0]);
  }

  onClickVideoFromPlayList(position) {
    console.log(this.videoObj[position].url);
    console.log(this.videoObj[position].type);
    sessionStorage.setItem('selectedPos', position);
    this.playListEvent.emit(this.videoObj[position]);
  }

}

