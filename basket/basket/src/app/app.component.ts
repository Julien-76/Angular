import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from  './app.Player'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basket';
  formulteam: FormGroup;
  members: Array<Player> = []

  constructor(private formBuilder: FormBuilder) {

    this.formulteam = formBuilder.group({
      nom: new FormControl("", [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl("", [Validators.required, Validators.minLength(4)]),
      age: new FormControl("", [Validators.required, Validators.min(18), Validators.max(45)]),
      taille: new FormControl("", [Validators.required, Validators.min(165)])
    })
  }

  onSubmit() {
    if (!this.formulteam.valid) {
      alert("Formulaire invalide")
    } else {
      this.members.push(this.formulteam.value)
    }
  }
  clickDelete(p: Player, members: Array<Player>) {
    members.splice(members.indexOf(p), 1);
  }
}
