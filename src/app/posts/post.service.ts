import { Injectable } from '@angular/core';
import { Post } from './post';
import { AngularFireDatabase } from '@angular/fire/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PostService {

  constructor
    (
      private _angularFireDatabase: AngularFireDatabase
    ) { }
  insert(post: Post) {
    this._angularFireDatabase.list("posts").push(post).then((result: any) => {
      console.log(result.key);
    });
  }
  update(post: Post, key: string) {
    this._angularFireDatabase.list("posts").update(key, post);
  }
  // getAll() {
  //   return this._angularFireDatabase.list("posts").snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map(data => ({
  //           key: data.payload.key, ...data.payload.val()
  //         }));
  //       })
  //     )
  // }
  delete(key: string) {
    this._angularFireDatabase.object(`posts/${key}`).remove();
  }
}
