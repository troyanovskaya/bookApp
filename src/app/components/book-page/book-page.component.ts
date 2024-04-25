import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  id: String = '';
  book?: Book;
  constructor( public booksService: BooksService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params['id']);
    this.booksService.getBook(this.id).subscribe( book => this.book = book);
  }

}
