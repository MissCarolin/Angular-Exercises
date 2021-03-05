import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private value$ = new Subject<string>();

  private value = '';


  setValue(val: string) {
    this.value$.next(val);

    this.value = val;

    console.log(val)
  }

  getValue(): Observable<string> {
    return this.value$.asObservable();
  }

  getDirectValue(): string {
    return this.value;
  }

  constructor() {}
}
