import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';
import { NoUserRecService } from 'src/app/services/no-user-rec.service';
import { RecService } from 'src/app/services/rec.service';

@Component({
  selector: 'app-rec-page',
  templateUrl: './rec-page.component.html',
  styleUrls: ['./rec-page.component.scss']
})
export class RecPageComponent implements OnInit, OnDestroy, DoCheck{
  constructor(public recService: RecService, public logInService: LogInService,
    public booksService: BooksService, public noUserRecs: NoUserRecService){}
  ngDoCheck(): void {
  }
  ngOnDestroy(): void {
    this.recService.setK([0.2, 0.3, 0.3, 0.2])
  }
  bookShown: number = 10;
  recArray: {book:Book, num:number}[] = [];
  val: any;
  compareNumbers(a:{book: Book, num: number}, b:{book: Book, num: number}) {
    return a.num - b.num;
  }
  showRecs(){
    this.recArray = [];
    if(this.logInService.user){
      this.logInService.user.user_books_recommendations.forEach( (book, index, arr) =>{
        this.booksService.getBook(book).subscribe( data =>{
          this.recArray.push({book:data, num:index});
          if(arr.length==this.recArray.length){
            this.recArray.sort(this.compareNumbers);
          }
        })
      })
    }
  }
  getRecs(k:number[]=[]){
    console.log('K: ', k)

    if(k.length == 4){
      console.log('set')
      this.recService.setK(k);
      this.recService.getBookRecs(this.logInService.user);
    } else{
      if(this.logInService.user && this.logInService.user.user_books_recommendations.length > 9){
        this.showRecs();
      }
      if (!this.logInService.user){
        console.log('111')
        this.recService.getBookRecs();
      } else if(this.logInService.user.user_books_recommendations.length < 10){
        console.log('222')
        this.recService.getBookRecs(this.logInService.user);
      }
    }

  }
  ngOnInit(): void {
    this.getRecs();
    this.recService.recsSorted.subscribe( data => {
      console.log('Inside')
      this.showRecs()})
    this.noUserRecs.userSet.subscribe( data => {
      console.log('Inside1')
      this.showRecs()})
  }
  showMoreBooks(){
    console.log(this.bookShown)
    this.bookShown = this.bookShown + 10;
  }
}
