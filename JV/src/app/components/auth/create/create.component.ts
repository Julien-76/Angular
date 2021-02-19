import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthWithFirebaseService } from 'src/app/shared/auth-with-firebase.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  createForm : FormGroup
  rejectMessage : string

  constructor(private formB : FormBuilder, public authFire : AuthWithFirebaseService) {
  }

  ngOnInit(): void {
    this.initcreateForm()
  }


  initcreateForm()
  {
    this.createForm = this.formB.group(
      {
        email : ["", Validators.required],
        password : ["", Validators.required]
      }
    )
  }

  submit()
  {
    if(!this.createForm.invalid)
    {
      this.authFire.signUp(this.createForm.value.email, this.createForm.value.password)
    }
  }

}
