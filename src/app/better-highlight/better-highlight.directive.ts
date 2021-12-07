import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string | undefined;
  @Input('appBetterHighlight') highlightColor: string | undefined;

  @HostBinding('style.backgroundColor') backGroundColor: string | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backGroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backGroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backGroundColor = this.defaultColor;
  }
}
