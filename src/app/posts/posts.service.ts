import { Injectable } from '@angular/core';
import { Post } from './posts.model';
import { HttpClient } from '@angular/common/http';

const API_URL = "https://ng-posts-89a06-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<Post[]>(`${API_URL}`);
  }

  getPostById(id: number) {
    return this.http.get<Post>(`${API_URL}/${id}`);
  }

  deletePost(id: number) {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
