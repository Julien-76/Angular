import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthWithFirebaseService } from './auth-with-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ChatWithFirestoreService {

  constructor(private firestore : AngularFirestore, private authFire : AuthWithFirebaseService) { }

  sendMessage(newMessage : string)
  {
    let data = {
      "message" : newMessage,
      "email" : this.authFire.UserEmail,
      "uid" : this.authFire.UserUid,
      "date" : new Date()
    }

    this.firestore.collection("ChatTechniFutur").add(data).then(
      (res) => { console.log("Message bien écrit") },
      (err) => { console.log("Message mal écrit") }
    )
  }


  getMessages()
  {
    return this.firestore.collection("ChatTechniFutur").snapshotChanges()
  }
}
