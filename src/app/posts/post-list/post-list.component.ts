import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/shared/authentication.service';
import { Post } from '../post';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  post: any;
 
  constructor(private _postservice: PostService) { }
 
  ngOnInit() {
    this.getPostsList();
  }
 
  getPostsList() {
    this._postservice.getPostsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(post => {
      this.post = post;
    });
  }
 
  deletePosts() {
    this._postservice.deleteAll().catch(err => console.log(err));
  }

}
