import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import {SlideInterface} from '../../../schemas/img-slider'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  //@Input() slides: SlideInterface[] = [];
  slides: SlideInterface[] = [{url: 'assets/slider1/slide1.png', title: 'slide1'},
  {url: 'assets/slider1/slide2.png', title: 'slide2'},
  {url: 'assets/slider1/slide3.png', title: 'slide3'}

];

  currentIndex: number = 0;
  timeoutId?: number;
  mainDot:number = 0

  ngOnInit(): void {
    this.resetTimer();

  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 5000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
    this.mainDot = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
    this.mainDot = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
    this.mainDot = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

}

