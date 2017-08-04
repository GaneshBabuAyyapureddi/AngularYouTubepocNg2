import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { PlaylistSidebarComponent } from './playlist-sidebar/playlist-sidebar.component';
import { DescriptionboxComponent } from './descriptionbox/descriptionbox.component';
import { CommentboxComponent } from './commentbox/commentbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    VideoplayerComponent,
    PlaylistSidebarComponent,
    DescriptionboxComponent,
    CommentboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
