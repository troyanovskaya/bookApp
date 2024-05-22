import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from 'src/app/schemas/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review?: Review;
  @Input() belongToUser?: Boolean;
  @Output() reloadReviews: EventEmitter<Boolean> = new EventEmitter<Boolean>;
  constructor(public reviewService:ReviewService){}
  deleteReview(){
    if(this.review){
      this.reviewService.deleteReview(this.review._id).subscribe( data =>{
        this.reloadReviews.emit(true);
      })
    }

  }
}
