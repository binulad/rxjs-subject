import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  public posts!: Post[];
  public postSub!: Subscription;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    console.log("Post List");
    
    this.postSub = this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
