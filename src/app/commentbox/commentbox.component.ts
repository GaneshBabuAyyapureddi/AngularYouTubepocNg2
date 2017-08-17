import { Component, OnInit, Input } from '@angular/core';
import { VideoIdService } from '../videos-id.service';

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
  
  constructor(private _commentService: VideoIdService) { }

  ngOnInit() {
    this.videoID = "assets/abcd1234.json";
    this._commentService.getComments(this.videoID).subscribe(resCommentData => this.commentList = resCommentData
      , resCommentError => this.errorMsg = resCommentError);
    console.log('in ng on init comment component' + this.videoID);
    console.log('in  comment  component list of video' + this.commentList);
  }

  enableSubmit() {
    if (this.commentInput.length > 0) {
      this.isDisabled = false;
    }
    console.log('in comment component' + this.videoID);
    console.log('in comment component list' + this.commentList);
    //console.log("data..."+this.commentInput + this.isDisabled);
  }
}
