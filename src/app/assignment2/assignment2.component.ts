import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss'],
  styles: [
    `
      .whiteText {
        color: white;
      }
    `,
  ],
})
export class Assignment2Component implements OnInit {
  showDetails = false;
  timeButtonClicked: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  showHideDetails() {
    this.showDetails = !this.showDetails;
    this.timeButtonClicked.push(new Date());
    console.log(this.timeButtonClicked);
  }

  getColor(index: any): string {
    if (index > 4) return 'green';
    return 'white';
  }
}
