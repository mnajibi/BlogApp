import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  constructor(private data: PostService) { }
  blogPosts: Array<BlogPost> = [];
  public posts: Subscription = new Subscription;
  ngOnInit(): void {
    this.posts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

} 
