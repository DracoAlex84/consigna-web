import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JuegosComponent,
    AboutmeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
