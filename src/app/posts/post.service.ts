import { Injectable } from '@angular/core';
import { Post } from './post';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PostService {
 
  private dbPath = '/posts';
 
  postsRef: AngularFireList<Post> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.postsRef = db.list(this.dbPath);
  }
 
  createPost(posts: Post): void {
    this.postsRef.push(posts);
  }
 
  updatePost(key: string, value: any): Promise<void> {
    return this.postsRef.update(key, value);
  }
 
  deletePost(key: string): Promise<void> {
    return this.postsRef.remove(key);
  }
 
  getPostsList(): AngularFireList<Post> {
    return this.postsRef;
  }
 
  deleteAll(): Promise<void> {
    return this.postsRef.remove();
  }
}
