import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[opacityD]'
})
export class OpacityDDirective {
  constructor(private element: ElementRef, renderer: Renderer2) { }
  @HostBinding('style.opacity') opacity:string = '1'
  @HostListener('mouseenter') onMouseEnter(){
    this.opacity = '0.8';
  }
  @HostListener('mouseout') onMouseOut(){
    this.opacity = '1';
  }
}

