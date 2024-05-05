import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from 'src/app/schemas/quote';

import { Review } from 'src/app/schemas/review';
import { QuoteService } from 'src/app/services/quote.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  id: String = '';
  reviews: Review[] = [];
  quotes: Quote[] = [];
  constructor(private route: ActivatedRoute, public reviewService: ReviewService,
    public quoteService: QuoteService
  ){

  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.reviewService.getReviewByBookId(this.id).subscribe( reviews => {
        this.reviews = reviews
      });
      this.quoteService.getQuoteByBookId(this.id).subscribe( quotes => {
        this.quotes = quotes
      });
    })
  }


}
