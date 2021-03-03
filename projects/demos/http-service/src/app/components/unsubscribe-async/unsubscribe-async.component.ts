import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-async',
  templateUrl: './unsubscribe-async.component.html',
  styleUrls: ['./unsubscribe-async.component.scss']
})
export class UnsubscribeAsyncComponent  {

  subject = new Subject();

//  constructor() { }

//    ngOnInit(): void {
//      console.log('ngonInit')
//    }

//    ngOnDestroy():void{
//      console.log('ngOnDestroy')
//    }

//    subscribe(): void{
//  }

   delayedNext(): void {
     setTimeout(() => {
       this.subject.next('delayedVal');
     }, 2000);
   }

}
