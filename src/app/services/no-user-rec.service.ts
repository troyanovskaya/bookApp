import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BooksService } from './books.service';
import { CommentService } from './comment.service';
import { QuoteService } from './quote.service';
import { RateService } from './rate.service';
import { ReviewService } from './review.service';
import { Book } from '../schemas/book';
import { LogInService } from './log-in.service';
import { User } from '../schemas/user';

@Injectable({
  providedIn: 'root'
})
export class NoUserRecService {
  counter = 1;
  intervalNoData: any;
  scoredBooks: {book: Book, score: number}[] = [];
  scoreFinished: EventEmitter<boolean> = new EventEmitter<boolean>;
  userSet: EventEmitter<boolean> = new EventEmitter<boolean>;
  constructor(public rateService: RateService, public booksService: BooksService,
    public quoteService: QuoteService, public reviewService: ReviewService,
    public commentService: CommentService, public logInService: LogInService) { }
  clearAll(){
    this.counter = 1;
    this.scoredBooks = [];
  }
  noDataRecs(){
    this.clearAll();
    this.booksService.getAllBooks().subscribe( data =>{
      data.forEach( (el) => {
        if(el.book_average_rate > 3){
          this.counter+=3
          this.scoredBooks.push({book: el, score: el.book_average_rate})
          this.commentService.getCommentByBookId(el._id).subscribe( e => {
            if(e.length > 0){
              let book = this.scoredBooks.filter( elem => elem.book._id == e[0].comment_book)[0];
              book.score+=e.length;
            }
            this.counter--;
          })
          this.reviewService.getReviewByBookId(el._id).subscribe( e => {
            if(e.length > 0){
              let book = this.scoredBooks.filter( elem => elem.book._id == e[0].review_book)[0];
              book.score+=e.length;
            }
            this.counter--;
          })
          this.quoteService.getQuoteByBookId(el._id).subscribe( e => {
            if(e.length > 0){
              let book = this.scoredBooks.filter( elem => elem.book._id == e[0].quote_book)[0];
              book.score+=e.length;
            }
            this.counter--;
          })
        }

      })
      this.counter--;
      this.intervalNoData = setInterval(this.noDataTimeOut.bind(this), 1000)
    })

  }
  noDataTimeOut(){
    function compareScores(a:{book: Book, score: number}, b:{book: Book, score: number}) {
      return b.score - a.score;
    }
    if(!this.counter){
      this.scoredBooks.sort(compareScores);
      this.scoreFinished.emit(true);
      clearInterval(this.intervalNoData);
    }

  }
  addToTen(books:{book: Book, score: number}[], arr: String[], user:User){
    user.user_books_recommendations = [];
    books.forEach( obj =>{
      user.user_books_recommendations.push(obj.book._id);
    })

    this.scoreFinished.subscribe( data => {


      this.scoredBooks.forEach( el =>{
        let filter = books.filter( element => element.book._id == el.book._id)[0];
        if(!filter && !arr.includes(el.book._id) && user.user_books_recommendations.length <10){
          user.user_books_recommendations.push(el.book._id);
        }
      })
      this.logInService.user = user;
      localStorage.setItem('userObject', JSON.stringify(user));
      console.log('!Scored books!', this.scoredBooks);
      console.log(this.logInService.user.user_books_recommendations)
      this.userSet.emit(true);
    })
    this.noDataRecs();

  }
}
