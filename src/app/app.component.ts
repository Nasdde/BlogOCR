import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lastUpdate = new Date();
  constructor() {
    // tslint:disable-next-line:prefer-const
    var firebaseConfig = {
      apiKey: 'AIzaSyDhRp8czIfOpX-kXFb2VI0UuAoAG9mfqSI',
      authDomain: 'http-client-demo-07079.firebaseapp.com',
      databaseURL: 'https://http-client-demo-07079.firebaseio.com',
      projectId: 'http-client-demo-07079',
      storageBucket: 'gs://http-client-demo-07079.appspot.com',
      messagingSenderId: '674910460675',
      appId: '1:674910460675:web:3eacb6c1afa8c99f23e736'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
