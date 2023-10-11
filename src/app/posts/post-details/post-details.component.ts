import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public selectedPost!: Post;
  public id!: number;

  constructor(private route: ActivatedRoute, private postService: PostsService, private router: Router) {}

  ngOnInit(): void { 
    this.route.params.subscribe((params) =>{
      this.id = +params['id'];
      this.getPostByID();
    });
  }

  getPostByID() {
    this.postService.getPostById(this.id).subscribe((response) => {
      this.selectedPost = response;
    });
  }

  handleDelete() {
    this.postService.deletePost(this.id).subscribe();
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
