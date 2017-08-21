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
          animate(".1s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none' })),
          animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }))
        ])
      ])
    ])
  ]
})
export class PlaylistSidebarComponent implements OnInit {
  @Output() playListEvent = new EventEmitter<VideoObject>();
  state: string = 'active';
  currentPlayingItem: number;

  public videoObj: VideoObject[];
  constructor(private _video: VideoIdService) { }

  ngOnInit() {
    this.currentPlayingItem = +localStorage.getItem("currentPlayingItem");
    console.log('current playing item from playlist' + this.currentPlayingItem);
    this._video.getVideoPlayerData().subscribe(result => {this.videoObj = result; console.log('Result inside arrow func: '+ this.videoObj);});
    console.log('First Result: '+ this.videoObj);
    this.getVideosArray();
  }

  onClickVideoFromPlayList(position) {
    localStorage.setItem('currentPlayingItem', position);
    this.playListEvent.emit(this.videoObj[position]);
  }
  getVideosArray() : VideoObject[]{
    console.log('playlist component getvideos aray method: '+ this.videoObj);
    return this.videoObj;
  }

}

