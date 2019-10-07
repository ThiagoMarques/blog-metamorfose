import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component'
import { PostEditComponent } from './post-edit/post-edit.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostService } from './post.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostEditComponent },
  { path: 'dashboard', component: PostDashboardComponent },
]

@NgModule({
  imports: [
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes), 
  ],
  declarations: [
    PostDashboardComponent,
    PostEditComponent,
    PostListComponent
  ],
  providers: [PostService]
})
export class PostsModule {}
