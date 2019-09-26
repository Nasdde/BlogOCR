import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }

  onLoveIt(post: Post) {
   this.postsService.loveIt(post);
  }

  onDontLoveIt(post: Post) {
    this.postsService.DontloveIt(post);
  }

  getColor(post: Post) {
    if (post.loveIts > 0) {
      return 'greenyellow';
    } else if (post.loveIts < 0 ) {
      return 'lightcoral';
    }
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
