import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceObsService } from './shared/service-obs.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AuthComponent } from './components/auth/auth.component';
import { AuthWithFirebaseService } from './shared/auth-with-firebase.service';
import { ChatComponent } from './components/chat/chat.component';
import { ChatWithFirestoreService } from './shared/chat-with-firestore.service';
import { environment } from 'src/environments/environment';
import { CreateComponent } from './components/auth/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuthComponent,
    ChatComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AuthWithFirebaseService,
    ChatWithFirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
