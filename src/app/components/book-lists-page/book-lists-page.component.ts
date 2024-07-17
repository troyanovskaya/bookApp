import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-book-lists-page',
  templateUrl: './book-lists-page.component.html',
  styleUrls: ['./book-lists-page.component.scss']
})
export class BookListsPageComponent implements OnInit{
  chosenList: string = 'Saved';
  chosenBooks: Book[] = [];
  bookShown: number = 10;
  changeList(list: any){
    this.chosenList = list;
    this.chosenBooks = [];
    if(this.logInService.user){
      switch (list){
        case 'Saved':
          let saved =  this.logInService.user.user_books_saved;
          for (let book of saved){
            this.booksService.getBook(book).subscribe( data =>{
            this.chosenBooks.push(data)
            })
          }
          break;
        case 'Read':
          let read =  this.logInService.user.user_books_read;
          for (let book of read){
            this.booksService.getBook(book).subscribe( data =>{
            this.chosenBooks.push(data)
            })
          }
          break;
        case 'Favourite':
          let fav =  this.logInService.user.user_books_favourite;
          for (let book of fav){
            this.booksService.getBook(book).subscribe( data =>{
            this.chosenBooks.push(data)
            })
          }
          break;
        case 'Dropped':
          let dropped =  this.logInService.user.user_books_dropped;
          for (let book of dropped){
            this.booksService.getBook(book).subscribe( data =>{
            this.chosenBooks.push(data)
            })
          }
          break;
        }
    }

  }
  showMoreBooks(){
    this.bookShown = this.bookShown + 10;
  }
  constructor(public logInService: LogInService, public booksService: BooksService,
    private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    if(this.logInService.user){
      let saved =  this.logInService.user.user_books_saved;
      for (let book of saved){
        this.booksService.getBook(book).subscribe( data =>{
          this.chosenBooks.push(data)
        })
      }
    }
    this.route.queryParams.subscribe( params => {
      if(Boolean(params['logout'])){
        this.router.navigate(['/'])
      }
    })


  }

}
