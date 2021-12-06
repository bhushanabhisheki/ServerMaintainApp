import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnInit {
  @Input('server') element: { type: string; name: string; content: string };
  constructor() {
    this.element = { type: '', name: '', content: '' };
  }

  ngOnInit(): void {}
}