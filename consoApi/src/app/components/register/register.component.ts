import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserInfo } from 'src/app/models/userRegister.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fg : FormGroup
  private url : string = "http://stevebstorm.somee.com/api";
  constructor(
    private _builder : FormBuilder,
    private _client : HttpClient,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.fg = this._builder.group({
      email :	['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      firstName : [''],
      lastName : [''],
      birthDate : ['']
    })
  }

  onSubmit() {
    let values = this.fg.value
    let newUser = new NewUserInfo()
    newUser.email = values['email']
    newUser.password = values['password']
    newUser.firstName = values['firstName']
    newUser.lastName = values['lastName']
    newUser.birthDate = values['birthDate']

    this.register(newUser)
  }

  register(newuser : NewUserInfo ) {
    this._client.post<NewUserInfo>(this.url+"/user/register", newuser).subscribe({
      next : () => this._router.navigate(['']),
      error : (error) => console.log(error)
    })
  }


}
