import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit, OnDestroy {

  blogPosts: Array<BlogPost> = [];
  private posts: any;
  constructor(private data: PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.data.getAllPosts().subscribe(data => this.blogPosts = data);
  }
  ngOnDestroy() {
    if (this.posts) this.posts.unsubscribe();
  }

  rowClicked(e: any, id: any) {
    this.router.navigate(['/admin/post', id]);
  }

}
