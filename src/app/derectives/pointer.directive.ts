import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pointerD]'
})
export class PointerDirective {
  constructor(private element: ElementRef, renderer: Renderer2) { }
  @HostBinding('style.cursor') cursor:string = 'auto'
  @HostListener('mouseenter') onMouseEnter(){
    this.cursor = 'pointer';
  }
  @HostListener('mouseout') onMouseOut(){
    this.cursor = 'auto';
  }
}
