import { Injectable} from '@angular/core';
import { Book } from '../schemas/book';
import { FilterService } from './filter.service';
import {HttpClient} from '@angular/common/http'
import { LogInService } from './log-in.service';
import { User } from '../schemas/user';


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
  constructor(public http: HttpClient, public logInService: LogInService) { };
  getAllBooks(queryString: string =''){
    queryString = queryString.replace('*', '');
    return this.http.get<Book[]>(`https://bookappback.onrender.com/books${queryString}`);
  }
  getBook(id:String){
    return this.http.get<Book>(`https://bookappback.onrender.com/books/${id}`);
  }
  patchBook(update: any, id: String){
    return this.http.patch<Book>(`https://bookappback.onrender.com/books/${id}`, update)
  }
  patchBookArray(newElement: any, property: String, id: String){
    return this.http.patch<Book>(`https://bookappback.onrender.com/books/${id}/${property}`, newElement);
  }
}
