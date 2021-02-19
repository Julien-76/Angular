import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { Groupe } from './Groupe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'festoche';
  formulband : FormGroup;
  liste: Array<Groupe> = [];
  listeFinale: Array<Groupe> = []

 constructor(private formBuilder: FormBuilder) {
   this.formulband = formBuilder.group({
      name: new FormControl("", [Validators.required]),
      style: new FormControl("",  [Validators.required, Validators.minLength(4)]),
      members: new FormControl("", [Validators.required, Validators.min(1)])
   })
 }

  onSubmit() {
    if (!this.formulband.valid) {
      alert("Formulaire invalide")
    } else {
      this.liste.push(this.formulband.value)
    }
    
  }
}
