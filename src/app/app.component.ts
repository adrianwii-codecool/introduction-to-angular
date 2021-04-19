import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'firstAngularMotoApp';
  name: string = "Adrian";

  alertMe(): void {
    alert(this.title)
  }
}
