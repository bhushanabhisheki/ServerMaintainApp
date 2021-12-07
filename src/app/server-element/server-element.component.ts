import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('server') element: { type: string; name: string; content: string };
  @Input('name') name: string | undefined;
  constructor() {
    this.element = { type: '', name: '', content: '' };
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOninit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
