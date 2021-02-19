import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBand } from './forms/band.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formulBand = new FormGroup(FormBand);

  members: number;
}