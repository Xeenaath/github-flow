import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../models/personnage'
import { Service } from '../service/service.service'

@Component({
  selector: 'app-personnage2',
  templateUrl: './personnage2.component.html',
  styleUrls: ['./personnage2.component.css']
})
export class Personnage2Component implements OnInit {

  @Input() personnage: Personnage
  service: Service;
  constructor(service: Service) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.abonnerAttaque().subscribe(degats => this.recevoirAttaque(degats));
  }

  attaque(degats: number) {
    this.service.publierAttaque2(degats)
  }

  recevoirAttaque(degats: number) {
      this.personnage.pointsDeVie -= degats;
  }

}
