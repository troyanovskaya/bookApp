import { Injectable } from '@angular/core';
import { User } from '../schemas/user';
import { RateService } from './rate.service';
import { Rate } from '../schemas/rate';
import { BooksService } from './books.service';
import { Book } from '../schemas/book';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from './quote.service';
import { ReviewService } from './review.service';
import { CommentService } from './comment.service';
import { UserService } from './user.service';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class RecService {
  dropped:Book[] = [];
  favourite:Book[] = [];
  allBooks: Book[] = [];
  rates: Rate[] = [];
  ratesSet: boolean = false;
  interval: any;
  intervalNoData: any;
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
  getUsersData(id: String, score: Number){
    return this.http.get<{'favourite': string[], 'dropped': string[]}>(`http://localhost:3000/users/${id}/${score}`);
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
      if(score.score>0){
        this.scoredBooks.push(score);
      }
    }
    this.scoredBooks.sort(this.compareScores);
    if(this.user){
      this.user.user_books_recommendations = [];
      this.scoredBooks.forEach( el =>{
        this.user?.user_books_recommendations.push(el.book)
      })
      if(this.user.user_books_recommendations.length < 10){
        this.noDataRecs();
      } else{
        this.userService.patchUser(this.user, this.user._id).subscribe( data =>{
          this.logInService.user = this.user;
          localStorage.setItem('userObject', JSON.stringify(this.user));
        })
      }
    }



  }
  getScore(book:Book){
    //////////////authors
    let kA = 0.2;
    let scoreA = 0;
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
    let kK = 0.3;
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
    let kG = 0.3;
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
    let kU = 0.2;
    let scoreU = 5;
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
  // найперша функція, що є каталізатором, викликає getFavWorstBooks та запускає інтервал
  getBookRecs(user?:User){
    if(user){
      this.user = user;
      this.getUsersData(user._id, 1).subscribe( data => {
        this.usersRecs = data;
        this.usersRecsSet = true;
      })
      this.getFavWorstBooks(user);
      this.interval = setInterval(this.timeOut.bind(this), 1000)
    } else{
      this.scoredBooks = [];
      this.noDataRecs()
    }

  }
  noDataRecs(){
    this.booksService.getAllBooks().subscribe( data =>{
      data.forEach( (el) => {
        if(el.book_average_rate > 3){
          this.counter+=3
          this.scoredBooks.push({book: el, score: el.book_average_rate})
          this.commentService.getCommentByBookId(el._id).subscribe( e => {
            if(e.length > 0){
              let book = this.scoredBooks.filter( elem => elem.book._id == e[0].comment_book)[0];
              book.score+=e.length;
            }
            this.counter--;
          })
          this.reviewService.getReviewByBookId(el._id).subscribe( e => {
            if(e.length > 0){
              let book = this.scoredBooks.filter( elem => elem.book._id == e[0].review_book)[0];
              book.score+=e.length;
            }
            this.counter--;
          })
          this.quoteService.getQuoteByBookId(el._id).subscribe( e => {
            if(e.length > 0){
              let book = this.scoredBooks.filter( elem => elem.book._id == e[0].quote_book)[0];
              book.score+=e.length;
            }
            this.counter--;
          })
        }

      })
      this.counter--;
      this.intervalNoData = setInterval(this.noDataTimeOut.bind(this), 1000)

    })

  }
  noDataTimeOut(){
    if(!this.counter){
      this.scoredBooks.sort(this.compareScores);
      if(this.user){
        this.scoredBooks.forEach( el =>{
          this.user?.user_books_recommendations.push(el.book)
        })
        this.userService.patchUser(this.user, this.user._id).subscribe( data =>{
          this.logInService.user = this.user;
          localStorage.setItem('userObject', JSON.stringify(this.user));
        })

      }
      clearInterval(this.intervalNoData);

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
        let arr: String[] = [...dropped_books, ...favourite_books, ...saved_books, ...read_books];
        for (let r of this.rates){
          arr.push(r.rate_book);
        }
        for (let el of data){
          if(arr.includes(el._id)){
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
            let filter = this.favourite.filter( el => el._id == book._id)[0];
            if(!filter){
              this.favourite.push(book);
            }
          } else if(rate.rate_score==1 || rate.rate_score==2){
            let filter = this.dropped.filter( el => el._id == book._id)[0];
            if(!filter){
              this.dropped.push(book);
            }
          }
        })
      }
    })
    for(let db of dropped_books){
      this.booksService.getBook(db).subscribe( book => {
        let filter = this.dropped.filter( el => el._id == book._id)[0];
        if(!filter){
          this.dropped.push(book);
        }
      })
    }
    for(let fb of favourite_books){
      this.booksService.getBook(fb).subscribe( book => {
        let filter = this.favourite.filter( el => el._id == book._id)[0];
        if(!filter){
          this.favourite.push(book);
        }
      })
    }
  }

  constructor(public rateService: RateService, public booksService: BooksService,
    public http: HttpClient, public quoteService: QuoteService, public reviewService: ReviewService,
    public commentService: CommentService, public userService: UserService,
  public logInService: LogInService) { }
}
