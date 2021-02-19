import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreateComponent } from './components/auth/create/create.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path : "", component : HomeComponent, pathMatch : "full"},
  {path : "auth", component : AuthComponent},
  {path : "createAccount", component : CreateComponent},
  {path : "chat", component : ChatComponent},

  {path : "**", redirectTo : '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
