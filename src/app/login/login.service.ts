import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

@Injectable()
export class LoginService {
  token: string;



  constructor(private router: Router){
  }

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken().then(
            token => {
              this.token = token;
              this.router.navigate(['/']);
          });
      })

  }



  getIdToken(){
    return this.token;
  }


  isAuth(){
    return this.token != null;
  }


  logout(){
    firebase.auth().signOut().then( () => {
      this.token = null;
      this.router.navigate(['login']);
    }).catch(
      error => console.log('error de logout' + error)
    );
  }
}
