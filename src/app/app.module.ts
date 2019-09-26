import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NewpostComponent } from './blog-list/newpost/newpost.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './services/posts.service';
import {Routes, RouterModule} from '@angular/router';

const  approutes: Routes = [
  { path: 'blogs',  component: BlogListComponent },
  { path: 'blogs/new',  component: NewpostComponent },
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: '**', redirectTo: 'blogs' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
