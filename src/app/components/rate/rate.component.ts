import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  @Input() stars!: number;
  @Input() size: number = 1;
  get styles(){
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size/6,
    }
  }
  getStarImage(current: number):string{
    const previousHalf = current - 0.5;
    const imageName = this.stars >=current
    ? 'star'
    : this.stars >= previousHalf
    ? 'star0.5'
    : 'star2'
    return `assets/${imageName}.png`;
  }
}


