import { Component, OnInit, Input } from '@angular/core';
import { VideoIdService } from '../videos-id.service';
import { VideoCommentModel } from '../video-comments-model';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css'],
  providers: [VideoIdService]

})
export class CommentboxComponent implements OnInit {
  @Input() videoID: string;
  public commentInput: String = "";
  public isDisabled: boolean = true;
  errorMsg: String;
  commentList = [];
  videoCommentObj: VideoCommentModel[];
  constructor(private _commentService: VideoIdService) { }

  ngOnInit() {
    // this._commentService.getComments(this.videoID).subscribe(videoCommentObj => this.videoCommentObj = videoCommentObj
    //   , resCommentError => this.errorMsg = resCommentError);
    this.getvideoCommentData(this.videoID);
  }
  getvideoCommentData(videoName) {
    this._commentService.getComments(videoName).subscribe(videoCommentObj => this.videoCommentObj = videoCommentObj
      , resCommentError => this.errorMsg = resCommentError);
    console.log('in comment component etvideoCommentData' + videoName);
    console.log('in comment component etvideoCommentData list' + this.videoCommentObj);
  }

  enableSubmit() {
    if (this.commentInput.length > 0) {
      this.isDisabled = false;
    }
  }
}
