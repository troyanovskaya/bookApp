import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { User } from '../schemas/user';
import { RateService } from './rate.service';
import { Rate } from '../schemas/rate';
import { BooksService } from './books.service';
import { Book } from '../schemas/book';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { LogInService } from './log-in.service';
import { NoUserRecService } from './no-user-rec.service';

@Injectable({
  providedIn: 'root'
})
export class RecService{
  dropped:Book[] = [];
  favourite:Book[] = [];
  allBooks: Book[] = [];
  rates: Rate[] = [];
  ratesSet: boolean = false;
  interval: any;
  counter = 1;
  quantityOfBooks: number = 0;
  authorsD: String[] = [];
  keywordsD: String[] = [];
  genresD: String[] = [];
  authorsF: String[] = [];
  keywordsF: String[] = [];
  genresF: String[] = [];
  scoredBooks:{book: Book, score: number}[] = [];
  usersRecs: {'favourite': string[], 'dropped': string[]} = {'favourite': [], 'dropped':[]};
  usersRecsSet: boolean = false;
  user?:User;
  k1 = 0.2;
  k2 = 0.3;
  k3 = 0.3;
  k4 = 0.2;
  recsSorted:EventEmitter<boolean> = new EventEmitter<boolean>
  arr: String[] = [];
  getUsersData(id: String, score: Number){
    return this.http.get<{'favourite': string[], 'dropped': string[]}>(`http://localhost:3000/users/${id}/${score}`);
  }
  getK(){
    return [this.k1, this.k2, this.k3, this.k4]
  }
  setK(k:number[]){
    this.k1 = k[0];
    this.k2 = k[1];
    this.k3 = k[2];
    this.k4 = k[3];
  }
  //Приймає два сеьи та видаляє в обох значення, що співпадають
  compareTwoSets(set1:Set<String>, set2:Set<String>){
    for(let val of set1){
      if(set2.has(val)){
        set2.delete(val)
        set1.delete(val);
      }
    }

  }
  compareScores(a:{book: Book, score: number}, b:{book: Book, score: number}) {
    return b.score - a.score;
  }
  // створєю 6 масивів: автори, ключові слова та жанри, улюблені та кинуті
  // викликає compareTwoSets та getScore
  getSearchedValues(){
    let dropA:Set<String> = new Set();
    let dropG:Set<String> = new Set();
    let dropK:Set<String> = new Set();
    let favA:Set<String> = new Set();
    let favG:Set<String> = new Set();
    let favK:Set<String> = new Set();
    for (let d of this.dropped){
      for (let a of d.book_authors){
        dropA.add(a.toLocaleLowerCase());
      }
      for (let k of d.book_keywords){
        dropK.add(k.toLocaleLowerCase());
      }
      for (let g of d.book_genres){
        dropG.add(g.toLocaleLowerCase());
      }
    }
    for (let f of this.favourite){
      for (let a of f.book_authors){
        favA.add(a.toLocaleLowerCase());
      }
      for (let k of f.book_keywords){
        favK.add(k.toLocaleLowerCase());
      }
      for (let g of f.book_genres){
        favG.add(g.toLocaleLowerCase());
      }
    }
    this.compareTwoSets(favA, dropA);
    this.compareTwoSets(favK, dropK);
    this.compareTwoSets(favG, dropG);
    this.authorsD = [...dropA];
    this.keywordsD = [...dropK];
    this.genresD = [...dropG];
    this.authorsF = [...favA];
    this.keywordsF = [...favK];
    this.genresF = [...favG];
    for (let b of this.allBooks){
      let score = this.getScore(b);
      if(score.score>1){
        this.scoredBooks.push(score);
      }
    }
    this.scoredBooks.sort(this.compareScores);
    if(this.user){
      console.log('scoredBooks')
      console.log(this.scoredBooks)
      if(this.scoredBooks.length < 10){
        console.log('Add to ten')
        this.noUserRecService.addToTen(this.scoredBooks, this.arr, this.user)
      } else{
        this.user.user_books_recommendations = [];
        this.scoredBooks.forEach( el =>{
          this.user?.user_books_recommendations.push(el.book._id);
        })
        this.userService.patchUser(this.user, this.user._id).subscribe( data =>{
          this.logInService.user = this.user;
          localStorage.setItem('userObject', JSON.stringify(this.user));
          this.recsSorted.emit(true);
        })
      }
    }



  }
  getScore(book:Book){
    //////////////authors
    let kA = this.k1;
    let scoreA = 0;
    console.log('Author! ', this.authorsF)
    for (let a of book.book_authors){
      if(this.authorsF.includes(a.toLocaleLowerCase())){
        scoreA = scoreA + 10;

      }
      if(this.authorsD.includes(a.toLocaleLowerCase())){
        scoreA = scoreA - 10;
      }
    }
    if(scoreA>10){
      scoreA = 10;
    } else if (scoreA < 0){
      scoreA = 0;
    }
    /////////////////// keywords
    let kK = this.k2;
    let scoreK = 0;
    for (let k of book.book_keywords){
      if(this.keywordsF.includes(k.toLocaleLowerCase())){
        scoreK = scoreK + 5;
      }
      if(this.keywordsD.includes(k.toLocaleLowerCase())){
        scoreK = scoreK - 5;
      }
    }
    if(scoreK>10){
      scoreK = 10;
    } else if (scoreK < 0){
      scoreK = 0;
    }
    ////////////////// genres
    let kG = this.k3;
    let scoreG = 0;
    for (let g of book.book_genres){
      if(this.genresF.includes(g.toLocaleLowerCase())){
        scoreG = scoreG + 5;
      }
      if(this.genresD.includes(g.toLocaleLowerCase())){
        scoreG = scoreG - 5;
      }
    }
    if(scoreG>10){
      scoreG = 10;
    } else if (scoreG < 0){
      scoreG = 0;
    }
    ////////users
    let kU = this.k4;
    let scoreU = 0;
    if(this.usersRecs.dropped.includes(book._id.toString())){
      scoreU = 0;
    } else if(this.usersRecs.favourite.includes(book._id.toString())){
      scoreU = 10;
    }
    return {book: book, score: scoreA*kA+scoreK*kK+scoreG*kG+kU*scoreU}
  }
  // перевіряє, чи всі книги додались до масивів, коли всі книги додано викликає getSearchedValues
  timeOut(){
    if(this.ratesSet){
      let len = this.dropped.length + this.favourite.length;
      if(this.quantityOfBooks == len && this.usersRecsSet){
        clearInterval(this.interval);
        this.getSearchedValues();
      }
    }

  }
  clearAll(){
  this.dropped = [];
  this.arr = [];
  this.favourite = [];
  this.allBooks = [];
  this.rates = [];
  this.ratesSet = false;
  this.counter = 1;
  this.quantityOfBooks = 0;
  this.authorsD = [];
  this.keywordsD = [];
  this.genresD = [];
  this.authorsF = [];
  this.keywordsF = [];
  this.genresF = [];
  this.scoredBooks = [];
  this.usersRecs = {'favourite': [], 'dropped':[]};
  this.usersRecsSet = false;
  }
  // найперша функція, що є каталізатором, викликає getFavWorstBooks та запускає інтервал
  getBookRecs(user?:User){
    this.clearAll();
    if(user){
      this.user = user;
      this.getUsersData(user._id, 1).subscribe( data => {
        this.usersRecs = data;
        this.usersRecsSet = true;
      })
      this.getFavWorstBooks(user);
      this.interval = setInterval(this.timeOut.bind(this), 1000)
    }

  }

  //витягує з сервера книги та оцінки за айдішниками
  getFavWorstBooks(user:User){
    let dropped_books = user.user_books_dropped;
    let favourite_books = user.user_books_favourite;
    let saved_books = user.user_books_saved;
    let read_books = user.user_books_read;
    this.rateService.getRateByUserId(user._id).subscribe( data => {
      this.rates = data;
      let len = new Set();
      dropped_books.forEach( el => len.add(el));
      favourite_books.forEach( el => len.add(el));
      this.rates.forEach( el => {
        if(el.rate_score!=3){
          len.add(el.rate_book)
        }

      });
      this.quantityOfBooks = len.size;
      this.booksService.getAllBooks().subscribe( data => {
        this.arr = [...dropped_books, ...favourite_books, ...saved_books, ...read_books];
        for (let r of this.rates){
          this.arr.push(r.rate_book);
        }
        for (let el of data){
          if(this.arr.includes(el._id)){
            continue;
          } else {
            this.allBooks.push(el);
          }
        }
      })
      this.ratesSet = true;
      for (let rate of this.rates){
        this.booksService.getBook(rate.rate_book).subscribe( book => {
          if(rate.rate_score==4 || rate.rate_score==5){
            let filter1 = this.favourite.filter( el => el._id == book._id)[0];
            let filter2 = this.dropped.filter( el => el._id == book._id)[0];
            if(!filter1 && !filter2){
              this.favourite.push(book);
            }
          } else if(rate.rate_score==1 || rate.rate_score==2){
            let filter1 = this.favourite.filter( el => el._id == book._id)[0];
            let filter2 = this.dropped.filter( el => el._id == book._id)[0];
            if(!filter1 && !filter2){
              this.dropped.push(book);
            }
          }
        })
      }
    })
    for(let db of dropped_books){
      this.booksService.getBook(db).subscribe( book => {
        let filter1 = this.favourite.filter( el => el._id == book._id)[0];
        let filter2 = this.dropped.filter( el => el._id == book._id)[0];
        if(!filter1 && !filter2){
          this.dropped.push(book);
        }
      })
    }
    for(let fb of favourite_books){
      this.booksService.getBook(fb).subscribe( book => {
        let filter1 = this.favourite.filter( el => el._id == book._id)[0];
        let filter2 = this.dropped.filter( el => el._id == book._id)[0];
        if(!filter1 && !filter2){
          this.favourite.push(book);
        }
      })
    }
  }

  constructor(public rateService: RateService, public booksService: BooksService,
    public http: HttpClient, public userService:UserService,
    public logInService: LogInService, public noUserRecService: NoUserRecService) { }
}
