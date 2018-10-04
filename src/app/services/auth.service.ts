import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    public afAuth: AngularFireAuth
  ) { }

  // Register
  registerUser(email:string, password:string) {
    return new Promise((resolve, reject)=> {
      this.afAuth.auth.createUserWithEmailAndPassword (email, password).then(userData => resolve(userData),
      err => reject(err));
    })
  }

// login
loginEmail(email:string, password:string) {
  return new Promise((resolve, reject)=> {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(userData => resolve(userData),
    err => reject(err));
  })
}

// Match login with data 
getAuth(){
  return this.afAuth.authState.map( auth => auth);
}

  logout(){
    return this.afAuth.auth.signOut();
  }
}
