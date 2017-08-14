import { Component,Input } from '@angular/core';
import { CommentService } from './commentbox/comment.service';
import { EJComponents } from 'ej-angular2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public childData ='https://www.youtube.com/embed/GU-2T7k9NfI?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os';
  ngOnInit() {}
  proper:Array<{paneSize:string}>; 
  true:Boolean;
  constructor() {
  this.proper = [{ paneSize: "50%" }, {paneSize:"50%"}];
  this.true=true;
  }
  
}
