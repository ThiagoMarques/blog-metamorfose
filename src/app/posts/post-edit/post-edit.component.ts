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
    public auth: AuthService
  ) {}

  ngOnInit() {
  }

  updatePost(isActive: boolean) {
    this._postService.updatePost(this.post.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deletePost() {
    this._postService
      .deletePost(this.post.key)
      .catch(err => console.log(err));
  }

  
}