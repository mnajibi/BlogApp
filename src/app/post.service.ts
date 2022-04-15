import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost';
import { Observable } from 'rxjs';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // Get posts per page
  getPosts(page: any, tag: null, category: null ): Observable<BlogPost[]> {
    
    let url = `https://limitless-dawn-95621.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;

    if (tag != null || tag != undefined) {
     url += `&tag=${tag}`;
    }

    if (category != null || category != undefined) {
     url += `&category=${category}`;
    }

    return this.http.get<BlogPost[]>(url);
  }

  // Get post by id
  getPostByID(id: any): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://limitless-dawn-95621.herokuapp.com/api/posts/${id}`);
  }

  // Get categories
  getCategories(): Observable<any> {
    return this.http.get<any>(`https://limitless-dawn-95621.herokuapp.com/api/categories`);
  }

  // Get tags
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://limitless-dawn-95621.herokuapp.com/api/tags`);
  }

  // Get all posts
  getAllPosts(): Observable<BlogPost[]> {
    const perPage = Number.MAX_SAFE_INTEGER.toString();
  
      perPage: perPage;

    return this.http.get<BlogPost[]>(`https://limitless-dawn-95621.herokuapp.com/api/posts?page=1&perPage=${perPage}`);
  }

  // Create new post
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://limitless-dawn-95621.herokuapp.com/api/posts`, data);
  }

   // Update post
   updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://limitless-dawn-95621.herokuapp.com/api/posts/${id}`, data);
  }

  // Delete post
  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://limitless-dawn-95621.herokuapp.com/api/posts/${id}`);
  }
}