import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthWithFirebaseService } from 'src/app/shared/auth-with-firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  loginForm : FormGroup
  rejectMessage : string

  constructor(private formB : FormBuilder, public authFire : AuthWithFirebaseService) {
  }

  ngOnInit(): void {
    this.initLoginForm()
  }


  initLoginForm()
  {
    this.loginForm = this.formB.group(
      {
        email : ["technitutu@gogole.be", Validators.required],
        password : ["test1234", Validators.required]
      }
    )
  }

  submit()
  {
    if(!this.loginForm.invalid)
    {
      this.authFire.signIn(this.loginForm.value.email, this.loginForm.value.password)
    }
  }

}
