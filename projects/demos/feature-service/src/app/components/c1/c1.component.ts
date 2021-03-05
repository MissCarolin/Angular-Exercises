import { Observable } from 'rxjs';
import { ExampleService } from './../../services/example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {

  constructor(private exampleService: ExampleService) { }

  sendValueToService(val: any): void {
    this.exampleService.setValue(val.target.value)
  }

  ngOnInit(): void {
  }

}
