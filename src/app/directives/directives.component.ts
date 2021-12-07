import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  oddNumbers: number[] = [1, 3, 5, 7, 9, 11, 13];
  evenNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
  onlyOdd = true;

  constructor() {}

  ngOnInit(): void {}
}