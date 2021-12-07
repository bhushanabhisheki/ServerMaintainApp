import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'blue'
    );
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'transparent'
    );
  }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
