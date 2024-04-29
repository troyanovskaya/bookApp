import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[underlineD]'
})
export class UnderlineDirective{

  constructor(private element: ElementRef, renderer: Renderer2) { }
  @HostBinding('style.text-decoration') textDecoration:string = 'none'
  @HostListener('mouseenter') onMouseEnter(){
    this.textDecoration = 'underline';
  }
  @HostListener('mouseout') onMouseOut(){
    this.textDecoration = 'none';
  }



}
