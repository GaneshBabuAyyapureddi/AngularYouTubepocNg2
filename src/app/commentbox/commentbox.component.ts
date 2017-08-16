import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  @Input() videoID:string;
  public commentInput : String ="";
  public isDisabled : boolean = false;
  constructor() { }

  ngOnInit() {
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
