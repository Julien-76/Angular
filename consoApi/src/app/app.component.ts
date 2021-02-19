import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbMenuItem } from '@nebular/theme';
import { LoginInfo } from './models/loginInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consoApi';

  fg : FormGroup
  isConnected : boolean = false;
  public items : NbMenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { title : 'Mes Démos', icon : 'folder', children : [
        {link : '/demo/demo1', title : 'FormArray'}]}]
  }

  onSubmit() {
   this.login(this.fg.value['email'], this.fg.value['password'])
  }

  login(email : string, password : string) {
    let user = new LoginInfo();
    user.email = email;
    user.password = password;
  }

  logout(){
    this.isConnected = false;
  }
}
