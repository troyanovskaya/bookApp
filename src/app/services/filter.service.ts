import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Book } from '../schemas/book';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService{
val = '';
results: {[key: string]: any } = {
  all: [], byName: [], byAuthor: [], byDescription: [], byKeyWords: [], byGenres: []}


searchVal:EventEmitter<string> = new EventEmitter<string>();
groupVal:EventEmitter<string> = new EventEmitter<string>();
constructor(public bookService: BooksService){}

// loadAllBooks(){
//   this.bookService.getAllBooks(`?str=${this.val}&sort=all`).subscribe(data => {
//     this.all = data;
//     this.groupVal.emit('all');
//   });
// }
filter(){
  this.bookService.getAllBooks(`?str=${this.val}&sort=all`).subscribe(data => {
    this.results['all'] = data;
    //this.groupVal.emit('all');
  });
  this.bookService.getAllBooks(`?str=${this.val}&sort=book_name`).subscribe(data => this.results['byName'] = data);
  this.bookService.getAllBooks(`?str=${this.val}&sort=book_authors`).subscribe(data => this.results['byAuthor'] = data);
  this.bookService.getAllBooks(`?str=${this.val}&sort=book_description`).subscribe(data => this.results['byDescription'] = data);
  this.bookService.getAllBooks(`?str=${this.val}&sort=book_keywords`).subscribe(data => this.results['byKeyWords'] = data);
  this.bookService.getAllBooks(`?str=${this.val}&sort=book_genres`).subscribe(data => this.results['byGenres'] = data);
}

onSearchValueChange(val:string){
  this.val = val;
  this.filter();
  this.searchVal.emit(val);
}

onGroupValueChange(val:string){
  this.groupVal.emit(val);
}

}
