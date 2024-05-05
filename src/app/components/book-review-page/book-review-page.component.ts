import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { Review } from 'src/app/schemas/review';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-book-review-page',
  templateUrl: './book-review-page.component.html',
  styleUrls: ['./book-review-page.component.scss']
})
export class BookReviewPageComponent implements OnInit{
  rew: String = '';
  book?: Book;
  id: String = '';
  reviews: Review[] = [];
  constructor(public logInService: LogInService, public reviewService: ReviewService,
    private route: ActivatedRoute, public booksService: BooksService
  ){}
  postReview(){
    let book = this.book;
    let user = this.logInService.user;
    let date = new Date().toLocaleDateString('en-GB');
    let arrayOfRows = this.rew.split("\n");
    if(user && book){
      let review = {review_book: book, review_book_img: book.book_img, review_book_name: book.book_name,
        review_book_authors: book.book_authors, review_user: user, review_user_img: user.user_img,
        review_user_login: user.user_login, review_text: arrayOfRows, review_date: date.toString()
      }
      this.reviewService.postReview(review).subscribe( data => {
        this.rew = '';
        this.reviewService.getReviewByBookId(this.id).subscribe( reviews => {
          this.reviews = reviews
        })
      })
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.booksService.getBook(this.id).subscribe( book => {
        this.book = book;
      });
      this.reviewService.getReviewByBookId(this.id).subscribe( reviews => {
        this.reviews = reviews
      })
    });
  }

}
