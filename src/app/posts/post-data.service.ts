import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  
  constructor() { }

  private postSource = new BehaviorSubject({ post: null, key: '' });
  currentPost = this.postSource.asObservable();
 
 
  changePost(post: Post, key: string) {
    this.postSource.next({ post: post, key: key });
  }
}