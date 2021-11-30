import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '.app-servers', //class selector
  // selector: '#app-servers', //id  selector
  selector: '[app-servers]', //attribute  selector

  templateUrl: './servers.component.html',
  //template: `<app-server></app-server> <app-server></app-server>`,
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
