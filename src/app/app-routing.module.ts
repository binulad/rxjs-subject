import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsHomeComponent } from './posts/posts-home/posts-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostsHomeComponent
      },
      {
        path: 'new',
        component: PostFormComponent
      },
      {
        path: ':id',
        component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
