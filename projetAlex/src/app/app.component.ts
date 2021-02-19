import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetAlex';
  cur: string;
  champ: string;
  newPersonne : string;
  personnes = []

  
filtre() {
  this.champ = this.cur;
}

ajout(personne: string) {
  this.personnes.push(personne);
}

}
