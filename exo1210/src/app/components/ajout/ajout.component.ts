import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Obj } from 'src/app/models/Obj.model';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {

  formUser : FormGroup;

  constructor(private formbuilder: FormBuilder) { 

    this.formUser = formbuilder.group({
      id: new FormControl("", [Validators.required]),
     name: new FormControl("", [Validators.required]),
     username: new FormControl("", [Validators.required]),
     email: new FormControl("", [Validators.required]),
     telephone: new FormControl("", [Validators.required])
    })

    
  }

baba: string = 'Julburn';


  ngOnInit(): void {
  }

}
