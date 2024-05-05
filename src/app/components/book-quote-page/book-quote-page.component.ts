import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { Quote } from 'src/app/schemas/quote';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-book-quote-page',
  templateUrl: './book-quote-page.component.html',
  styleUrls: ['./book-quote-page.component.scss']
})
export class BookQuotePageComponent {
  q: String = '';
  q_by: String = '';
  book?: Book;
  id: String = '';
  quotes: Quote[] = [];
  showCommentField:boolean = false;
  constructor(public logInService: LogInService, public quoteService: QuoteService,
    private route: ActivatedRoute, public booksService: BooksService
  ){}
  postQuote(){
    let book = this.book;
    let user = this.logInService.user;
    let date = new Date().toLocaleDateString('en-GB');
    let arrayOfRows = this.q.split("\n");
    if(user && book){
      let quote = {quote_book: book, quote_book_img: book.book_img, quote_book_name: book.book_name,
        quote_book_authors: book.book_authors, quote_user: user, quote_user_img: user.user_img,
        quote_user_login: user.user_login, quote_text: arrayOfRows, quote_date: date.toString(),
        quote_character: this.q_by.trim()
      }
      this.quoteService.postQuote(quote).subscribe( data => {
        this.q = '';
        this.q_by = `- ${this.book?.book_authors.join(', ')}, ${this.book?.book_name}`;
        this.quotes.push(data);
        this.showCommentField = false;
      })
    }
  }
  changeVisibility(event: boolean){
    this.showCommentField = event;
  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.booksService.getBook(this.id).subscribe( book => {
        this.book = book;
        this.q_by = `- ${book.book_authors.join(', ')}, ${book.book_name}`;
      });
      this.quoteService.getQuoteByBookId(this.id).subscribe( quotes => {
        this.quotes = quotes
      })
    });
  }

}

