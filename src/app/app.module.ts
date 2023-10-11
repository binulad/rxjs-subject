import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsHomeComponent } from './posts/posts-home/posts-home.component';
import { TextTruncatePipe } from './shared/pipes/text-truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostListComponent,
    PostFormComponent,
    PostItemComponent,
    HomeComponent,
    PostDetailsComponent,
    PostsHomeComponent,
    TextTruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
