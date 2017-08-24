import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EJAngular2Module } from 'ej-angular2';

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
    BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule, Ng2SearchPipeModule,EJAngular2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
