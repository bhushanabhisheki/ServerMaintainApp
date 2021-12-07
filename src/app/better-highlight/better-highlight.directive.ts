import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backGroundColor: string | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backGroundColor = 'pink';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backGroundColor = 'orange';
  }

  ngOnInit() {
    this.backGroundColor = 'transparent';
  }
}
