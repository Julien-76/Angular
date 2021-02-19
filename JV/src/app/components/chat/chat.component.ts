import { Component, OnInit } from '@angular/core';
import { ChatWithFirestoreService } from 'src/app/shared/chat-with-firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  newMessage : string = ""
  listMessages : any[] = []

  constructor(private chatFire : ChatWithFirestoreService) { }

  ngOnInit(): void {
    this.chatFire.getMessages().subscribe(
      (dataMessages) => {

          let i = 0;
        for(let message of dataMessages)
        {
          this.listMessages[i] = message.payload.doc.data()
          this.listMessages[i].id = message.payload.doc.id

          i++;
        }
      }
    )
  }

  sendMessage()
  {
    if(this.newMessage != "")
    {
      this.chatFire.sendMessage(this.newMessage)
    }
  }

}
