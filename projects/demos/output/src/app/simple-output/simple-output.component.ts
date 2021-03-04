import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-output',
  templateUrl: './simple-output.component.html',
  styleUrls: ['./simple-output.component.scss']
})
export class SimpleOutputComponent implements OnInit {
  @Output() simpleOutput = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  simpleOutputEmit(): void {
    console.log('simpleOutputEmit')
    this.simpleOutput.emit();
  }

}
