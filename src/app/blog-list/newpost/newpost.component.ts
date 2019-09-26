import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group( {
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSaveBook() {
    const title = this.postForm.get('title').value;
    const  content = this.postForm.get('content').value;
    const  newPost = new Post(title, content);
    newPost.loveIts = 0;
    newPost.created = Date();
    this.postsService.createNewPost(newPost);
    this.router.navigate( ['/posts']);
  }


}
