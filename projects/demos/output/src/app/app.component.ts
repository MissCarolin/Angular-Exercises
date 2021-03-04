import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
buttonIds = [1,2,3,4,5]

  onSimpleOutput(event: number): void{
    console.log('onSimpleOutput', event)
  }
}
