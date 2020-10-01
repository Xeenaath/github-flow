import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  busAttaque : Subject<number> = new Subject<number>();
  busAttaque2 :  Subject<number> = new Subject<number>();
  constructor() { }

  
  publierAttaque(degats:number) {
    return this.busAttaque.next(degats);
  }

  abonnerAttaque(){
    return this.busAttaque.asObservable();
  }

  publierAttaque2(degats:number) {
    return this.busAttaque2.next(degats);
  }

  abonnerAttaque2(){
    return this.busAttaque2.asObservable();
  }
}
