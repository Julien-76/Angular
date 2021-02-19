import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficheComponent } from './components/affiche/affiche.component';
import { AjoutComponent } from './components/ajout/ajout.component';

const routes: Routes = [
{ path: "affiche", component: AfficheComponent},
{ path: "ajout", component: AjoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
