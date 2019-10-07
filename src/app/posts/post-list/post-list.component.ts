import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/shared/authentication.service';
import { Post } from '../post';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  // posts: Observable<Post[]>
  // constructor(private postService: PostService, 
  //   public auth: AuthService) {}

  // ngOnInit() {
  // }
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
 
  itemValue = '';
  items: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
  ngOnInit() {
  }
 
  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }

}
