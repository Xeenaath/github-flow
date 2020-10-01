import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  busAttaque : Subject<number> = new Subject<number>();
  constructor() { }
  
  publierAttaque(degats:number) {
    return this.busAttaque.next(degats);
  }

  abonnerAttaque(){
    return this.busAttaque.asObservable();
  }
}
