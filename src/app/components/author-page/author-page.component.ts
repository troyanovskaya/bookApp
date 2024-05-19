import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/schemas/author';
import { Book } from 'src/app/schemas/book';
import { AuthorService } from 'src/app/services/author.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit{
  constructor(public authorService: AuthorService, public route: ActivatedRoute,
    public booksService:BooksService
  ){}
  name: string = '';
  author?: Author;
  books: Book[] = [];
  seriesBooks: {series: String, books:Book[]}[] = [];
  compareScores(a:any, b:any) {
    return a.book_series_numbers[0] - b.book_series_numbers[0];
  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.name = params['name'];
      this.authorService.getAuthorByName(this.name).subscribe( data =>{
        if(data.length!=0){
          this.author = data[0];
          for (let s of this.author.author_series){
            this.seriesBooks.push({series: s, books:[]})
          }
          for (let b of this.author.author_books){
            this.booksService.getBook(b).subscribe( book =>{
              if(book.book_series.length > 0){
                this.seriesBooks.forEach (el =>{
                  if(el.series == book.book_series[0]){
                    el.books.push(book);
                    el.books.sort(this.compareScores)
                  } else{
                    this.books.push(book);
                  }
                })
              } else{
                this.books.push(book);
              }

            })
          }

        }
      })})
  }

}
