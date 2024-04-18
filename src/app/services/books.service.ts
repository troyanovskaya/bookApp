import { Injectable} from '@angular/core';
import { Book } from '../schemas/book';
import { FilterService } from './filter.service';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BooksService{
books:Book[] = [];

  clearSearchProperty(book:Book){
    // book.search.name = false;
    // book.search.author = false;
    // book.search.description = false;
    // book.search.keywords = false;
  }
  updateSearchResults(){
    // let allBooks = this.books.filter(el=> el.search.name || el.search.author || el.search.description || el.search.keywords);
    // let booksByName = this.books.filter(el=> el.search.name);
    // let booksByAuthor = this.books.filter(el=> el.search.author);
    // let booksByDesription = this.books.filter(el=> el.search.description);
    // let booksByKeywords = this.books.filter(el=> el.search.keywords);
    // this.filterService.searchByProperties.all = allBooks.length;
    // this.filterService.searchByProperties.byName = booksByName.length;
    // this.filterService.searchByProperties.byAuthor = booksByAuthor.length;
    // this.filterService.searchByProperties.byDescription = booksByDesription.length;
    // this.filterService.searchByProperties.byKeyWords = booksByKeywords.length;
  }
  filterBooks(){
    // this.filteredBooks = [];
    // for(let book of this.books){
    //   this.clearSearchProperty(book);
    //   let str = this.filterService.searchString;
    //   book.search.name = book.name.toLowerCase().includes(str) ?  true : false;
    //   book.search.author = book.author.toLowerCase().includes(str) ?  true : false;
    //   let descArr = book.description.filter( el => el.toLowerCase().includes(str));
    //   book.search.description = descArr.length > 0 ? true : false;
    //   let keywordsArr = book.keywords.filter( el => el.toLowerCase().includes(str));
    //   book.search.keywords = keywordsArr.length > 0 ? true : false;
    //   this.updateSearchResults();
    //   if( str === '' ){
    //     this.filteredBooks.push(book);
    //   } else if (this.filterService.searchChosen.all){
    //     if (book.search.name || book.search.author || book.search.description || book.search.keywords){
    //       this.filteredBooks.push(book);
    //     }
    //   } else if(this.filterService.searchChosen.byName){
    //     if (book.search.name){
    //       this.filteredBooks.push(book);
    //     }
    //   } else if(this.filterService.searchChosen.byAuthor){
    //     if (book.search.author){
    //       this.filteredBooks.push(book);
    //     }
    //   } else if(this.filterService.searchChosen.byDescription){
    //     if (book.search.description){
    //       this.filteredBooks.push(book);
    //     }
    //   } else if(this.filterService.searchChosen.byKeyWords){
    //     if (book.search.keywords){
    //       this.filteredBooks.push(book);
    //     }
    //   }
    // }

  }
  constructor(public filterService:FilterService, public http: HttpClient) { };
  getAllBooks(){
    return this.http.get<Book[]>('http://127.0.0.1:8000/books');

  }
}
