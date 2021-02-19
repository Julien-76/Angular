import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthWithFirebaseService {

  rejectMessage : string = ""
  UserUid : string = ""
  UserEmail : string = ""
  authFireStatus : boolean = false

  constructor(private authFirebase : AngularFireAuth, private route : Router) { }

  signIn(email : string, mdp : string) //connect
  {
    this.authFirebase.signInWithEmailAndPassword(email, mdp).then(
      /*Resolve*/ (value) => { 
        this.UserUid = value.user.uid,
        this.UserEmail = value.user.email,
        this.authFireStatus = true
        this.route.navigate(["chat"])
      },
      /*Reject*/ (reason) => { this.rejectMessage = reason.message }
    ).catch(
      (error) => { console.log("Erreur : ", error.message)}
    )
  }

  signUp(email : string, mdp : string) //create
  {
    this.authFirebase.createUserWithEmailAndPassword(email, mdp).then(
      (value) => { this.route.navigate[""] },
      (reason) => { this.rejectMessage = reason.message }
    ).catch(
      (error) => {console.log("Erreur : ", error.message)}
    )
  }

  logout()
  {
    this.authFirebase.signOut().then(
      () => { console.log("bien déconnecté"), this.authFireStatus = false},
      () => { console.log("Mal déconnecté")}
    ).catch(
      (error) => { console.log(error.message)}
    )
    
    this.route.navigate([""])
  }
}
