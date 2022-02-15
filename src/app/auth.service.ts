import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth, ) { 
    this.user = this.auth.user
  }

  login() {
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const popup = window.open('http://localhost:4000/redirect', '_blank', 'height=700, width=800')
    
  }

  customSignIn(token: string) {
    this.auth.signInWithCustomToken(token).then(() => window.close)
  }

  logout() {
    this.auth.signOut();
  }
}
