import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test Server 1', content: 'Just a test server1' },
    {
      type: 'blueprint',
      name: 'Test Server 2',
      content: 'Just a test server2',
    },
    {
      type: 'blueprint',
      name: 'Test Server 2',
      content: 'Just a test server2',
    },
  ];
}
