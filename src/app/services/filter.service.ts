import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Book } from '../schemas/book';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements OnInit {
books: Book[] = [];
filteredBooks: Book[] = [];
val = '';
searchChosen = {all: 0, byName:0, byAuthor:0, byDescription:0, byKeyWords:0, byGenres:0}
constructor(public bookService: BooksService){}
reloadSearchChosen(){
  this.searchChosen.all = 0;
  this.searchChosen.byName = 0;
  this.searchChosen.byAuthor = 0;
  this.searchChosen.byDescription = 0;
  this.searchChosen.byKeyWords = 0;
  this.searchChosen.byGenres = 0;
}
loadFilterService(){
  if(this.books.length == 0){
    this.bookService.getAllBooks().subscribe( data => {
      this.books = data;
      this.filteredBooks = data
    });
  }
}
ngOnInit(){
}
filterBooksBy(bykey:string = 'all'){
  if(this.val){
    let val = this.val;
    this.reloadSearchChosen()
    let filtered = [];
    if(val !== ''){
      for (let book of this.books){
        let name = book.book_name.toLowerCase().includes(val) ?  true : false;
        let authors = book.book_authors.reduce((acc, current) => acc || current.toLowerCase().includes(val), false)
        let descArr = book.book_description.filter( el => el.toLowerCase().includes(val));
        let description = descArr.length > 0 ? true : false;
        let keywordsArr = book.book_keywords.filter( el => el.toLowerCase().includes(val));
        let keywords = keywordsArr.length > 0 ? true : false;
        let genreArr = book.book_genres.filter( el => el.toLowerCase().includes(val));
        let genres =  genreArr.length > 0 ? true : false;
        if(name){
          this.searchChosen.byName++;
        }
        if(authors){
          this.searchChosen.byAuthor++;
        }
        if(description){
          this.searchChosen.byDescription++;
        }
        if(keywords){
          this.searchChosen.byKeyWords++;
        }
        if(genres){
          this.searchChosen.byGenres++;
        }
        if(name || authors || description || keywords || genres){
          this.searchChosen.all++;
        }
        switch (bykey){
          case 'name':
            if(name){
              filtered.push(book);
            }
            break;
          case 'authors':
            if(authors){
              filtered.push(book);
            }
            break;
          case 'description':
            if(description){
              filtered.push(book);
            }
            break;
          case 'keywords':
            if(keywords){
              filtered.push(book);
            }
            break;
          case 'genres':
            if(genres){
              filtered.push(book);
            }
            break;
          default:
            if(name || description || authors || keywords || genres){
              filtered.push(book);
            }
        }


      }
      console.log(filtered.length);
      this.filteredBooks = filtered;

    }
  }


}

searchVal:EventEmitter<string> = new EventEmitter<string>();
onSearchValueChange(val:string){
  this.val = val;
  this.searchVal.emit(val);
  this.filterBooksBy();
}
}
