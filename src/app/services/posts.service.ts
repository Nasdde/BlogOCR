import { Injectable } from '@angular/core';
import { Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

emitPosts() {
  this.postsSubject.next(this.posts);
}

savePosts() {
  firebase.database().ref('/posts').set(this.posts);
}

getPosts() {
  firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
}
createNewPost(newPost: Post) {
  // tslint:disable-next-line:prefer-const
  let lastUpdate = new Date();
  this.posts.push(newPost);
  this.savePosts();
  this.emitPosts();
  console.log( newPost);
}
deletePost(post: Post) {
  const postIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if (postEl === post) {
        return true;
      }
    }
  );
  this.posts.splice(postIndexToRemove, 1);
  this.savePosts();
  this.emitPosts();
}

loveIt(post: Post) {
  const postIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if (postEl === post) {
        return true;
      }
    }
  );
  post.loveIts = post.loveIts + 1;
  firebase.database().ref().child('/posts/' + postIndexToRemove) .update({ loveIts: post.loveIts });
}

  DontloveIt(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    post.loveIts = post.loveIts - 1;
    firebase.database().ref().child('/posts/' + postIndexToRemove) .update({ loveIts: post.loveIts });
  }



}
