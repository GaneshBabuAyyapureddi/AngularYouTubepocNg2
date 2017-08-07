import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  public commentInput : String ="";
  public isDisabled : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  enableSubmit(){
    if(this.commentInput.length>0){
        this.isDisabled = false;
    }
    console.log("data..."+this.commentInput + this.isDisabled);
  }
}
