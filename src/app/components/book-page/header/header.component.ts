import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from 'src/app/schemas/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  id: String = '';
  reviews: Review[] = [];
  constructor(private route: ActivatedRoute, public reviewService: ReviewService){

  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.reviewService.getReviewByBookId(this.id).subscribe( reviews => {
        this.reviews = reviews
      });
    })
  }


}
