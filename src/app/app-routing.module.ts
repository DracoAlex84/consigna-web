import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { JuegosComponent } from './components/juegos/juegos.component';

const routes: Routes = [

  {
    path: 'juegos',
    component: JuegosComponent
  },

  {
    path: 'aboutme',
    component: AboutmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
