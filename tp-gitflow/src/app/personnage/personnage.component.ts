import { Component, Input, OnInit } from '@angular/core';
import { Personnage } from '../models/personnage'
import { Service } from '../service/service.service'

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent implements OnInit {

  @Input() personnage: Personnage
  service: Service;
  constructor(service: Service) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.abonnerAttaque2().subscribe(degats => this.recevoirAttaque(degats));
  }

  attaque(degats: number) {
    this.service.publierAttaque(degats)
  }

  recevoirAttaque(degats: number) {
      this.personnage.pointsDeVie -= degats;
  }
}
