import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { Personnage2Component } from './personnage2/personnage2.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnageComponent,
    Personnage2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
