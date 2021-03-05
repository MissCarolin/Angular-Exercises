import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feature-service';
  onChange = 'change';



  sendValueToComponent(val: any): void {
    this.onChange = val.target.value
  }

}
