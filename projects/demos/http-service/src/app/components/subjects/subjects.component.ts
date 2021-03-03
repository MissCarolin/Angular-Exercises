import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {
   subject = new BehaviorSubject(null);
   rsubject = new Subject();
   bsubject = new Subject();
   asubject = new Subject();


   subscriptions: Subscription[] = [];

  constructor() { }

    ngOnInit(): void {
      console.log('ngonInit')
    }

    ngOnDestroy():void{
      console.log('ngOnDestroy')

      this.subscriptions.forEach((s) => s.unsubscribe());
    }

    subscribe(): void{
     const text = 'subscription' + this.subscriptions.length;

     const subscription = this.subject.subscribe((val)=>{
        console.log(text, val);
      })
      this.subscriptions.push(subscription);
  }

    delayedNext(): void {
      setTimeout(() => {
        this.subject.next('delayedVal');
      }, 2000);
    }


}
