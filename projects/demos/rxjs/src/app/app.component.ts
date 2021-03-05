import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'rxjs';
  subject = new Subject<string>();

  //tab verändert wert nicht, sondern gibt sbscription wert von vorher aus, gut zum DEBUGGEN
  map1 = this.subject.pipe(map(v => v.toUpperCase()),
  tap((v)=> console.log('tab'))
  )

  //map bedeutet immer: bearbeitet daten!, hat einen return wert, wird jedes mal angewandt wenn subscription gefeuert wird, map kann nur synchrones verarbeiten
  map2 = this.map1.pipe(map(v => v + '_ADD_STRING'));


  //mapTo : ändert string
  //share(): macht, dass die gleiche subscription kette nur ein mal ausführt wird, da wo share() steht hört abfrage nach oben auf und der abgefeuerte wert wird abgegiffen
  //mergeMap: nimmt letzten gefeuerten wert und feuert ihn weiter. Macht aus zwei zuflüssen einen und diese daten können dann verwendet werden (auf verschiedenen quellen kommen daten und es gibt dann eine aktion die das ausführt)
  //concatMap: wie merge nur dass es der reihenfolge nach feuert und nicht welche subscription zuerst da ist (zb bei delay)
  //switchMap: zb. Bouncer ()
  // distinct: wie set() filtert doublikate raus

  // of vs from: bei from trägt man werte nicht selber ein, werte kommen aus array


  onBlur_input(event: any): void {
    this.subject.next(event?.target.value);
  }


}
