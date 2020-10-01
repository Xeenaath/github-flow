import { Component } from '@angular/core';
import { Personnage } from './models/personnage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-gitflow';
  perso1 = new Personnage("Link", 100);
  perso2 = new Personnage("Ganondorf", 100);
}
