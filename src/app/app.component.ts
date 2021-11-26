import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'],
  styles: [
    `
      h1 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ServerMaintainApp';
}
