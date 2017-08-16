import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css'],
  providers: [CommentService]

})
export class CommentboxComponent implements OnInit {
  @Input() videoID:string;
  public commentInput : String ="";

  public isDisabled : boolean = true;
  errorMsg : String;
  commentList = [];
  constructor(private _commentService : CommentService) { }

  ngOnInit() {

   this._commentService.getComments().subscribe(resCommentData => this.commentList = resCommentData
,resCommentError => this.errorMsg = resCommentError);
console.log ('in ng on init comment component' + this.videoID);
  }
  enableSubmit(){
    if(this.commentInput.length>0){
        this.isDisabled = false;
    }
      console.log ('in comment component' + this.videoID);
    //console.log("data..."+this.commentInput + this.isDisabled);
  }
}
