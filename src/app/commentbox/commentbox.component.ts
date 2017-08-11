import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';


@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css'],
  providers: [CommentService]

})
export class CommentboxComponent implements OnInit {
  public commentInput : String ="";
  public isDisabled : boolean = true;
  errorMsg : String;
  commentList = [];
  constructor(private _commentService : CommentService) { }

  ngOnInit() {

   this._commentService.getComments().subscribe(resCommentData => this.commentList = resCommentData
,resCommentError => this.errorMsg = resCommentError);
 
  }
  enableSubmit(){
    if(this.commentInput.length>0){
        this.isDisabled = false;
    }
    console.log("data..."+this.commentInput + this.isDisabled);
  }
}
