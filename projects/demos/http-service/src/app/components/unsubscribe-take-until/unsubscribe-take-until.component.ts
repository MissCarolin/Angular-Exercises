import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe-take-until',
  templateUrl: './unsubscribe-take-until.component.html',
  styleUrls: ['./unsubscribe-take-until.component.scss'],
})
export class UnsubscribeTakeUntilComponent implements OnInit {
  subject = new Subject();

  private destroyed = new Subject();

  constructor() {}

  ngOnInit(): void {
    console.log('ngonInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.destroyed.next();
    this.destroyed.complete();
  }

  subscribe(): void {
    const text = 'subscription';
      //bevorzugte unsubscription methode mit takeUntil
      this.subject.pipe(takeUntil(this.destroyed)).subscribe((val) => {
      console.log(text, val);
    });
  }

  delayedNext(): void {
    setTimeout(() => {
      this.subject.next('delayedVal');
    }, 2000);
  }
}
