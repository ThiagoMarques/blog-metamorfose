import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/shared/authentication.service';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post;
  key: string = '';

  constructor(
    private _postService: PostService,
    private _postServiceData: PostDataService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.post = new Post();
    // this._postServiceData.changePost.subscribe(data => {
    //   if(data.post && data.key) {
    //     this.post = new Post();
    //     this.post.conteudo = data.post.conteudo;
    //   }
    // })
  }
  getPosts() {
  }

  
}