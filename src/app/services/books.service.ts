import { Injectable} from '@angular/core';
import { Book } from '../schemas/book';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService{
books:Book[] = [
  {id: "1", name: "Jane Eyre", year:2011, author:"Charlotte Bronte", genres: ["Fiction", "Historical", "Gothic", "Novel", "19th Century"], description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
   img:"assets/covers/book1.jpg", state:"Unread", keywords: ["Charlotte Brontë", "Jane Eyre", "Victorian literature", "Bildungsroman", "Gothic fiction", "Romance", "Orphan", "Governess", "Thornfield Hall", "Mr. Rochester", "Bertha Mason", "Feminism", "Social class", "Religion", "Love", "Independence", "Morality", "England", "19th century", "Literary classic"], search:{name:false, author:false, description:false, keywords:false}},
  {id: "2", name: "The Hunger Games", year: 2008, author:"Suzanne Collins", genres: ["Young Adult", "Fiction", "Fantasy", "Science Fiction", "Post Apocalyptic", "Action", "Novel"], description:["In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.", "Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."],
   img:"assets/covers/book2.jpg", state:"Unread", keywords: ["Suzanne Collins", "The Hunger Games", "Katniss Everdeen", "Peeta Mellark", "District 12", "Panem", "Dystopian fiction", "Young adult literature", "Survival", "Rebellion", "Government oppression", "The Capitol", "Arena", "Mockingjay", "Catching Fire", "Mockingjay symbol", "Primrose Everdeen", "Gale Hawthorne", "President Snow", "Revolution"], search:{name:false, author:false, description:false, keywords:false}, series: ["The Hunger Games"]},
  {id: "3", name: "The Book Thief", year: 2005, author:"Markus Zusak", genres: ["Historical Fiction", "Young Adult", "Historical", "Classics", "World War 2"], description:["Narrated by Death, Markus Zusak's groundbreaking new novel is the story of Liesel Meminger, a young foster girl living outside of Munich in Nazi Germany. Liesel scratches out a meager existence for herself by stealing when she discovers something she can't resist--books. Soon she is stealing books from Nazi book burnings, the mayor's wife's library, wherever they are to be found.", "With the help of her accordion-playing foster father, Liesel learns to read and shares her stolen books with her neighbors during bombing raids, as well as with the Jewish man hidden in her basement.", "Markus Zusak, award winning author of I Am the Messenger, has crafted an unforgettable novel about the ability of books to feed the soul."],
   img:"assets/covers/book3.jpg", state:"Unread", keywords: ["Markus Zusak", "The Book Thief", "Liesel Meminger", "Death", "Nazi Germany", "World War II", "Holocaust", "Books", "Stealing", "Friendship", "Family", "Loss", "Humanity", "Courage", "Hope", "Love", "Suffering", "Survival", "Grief", "Narrator"], search:{name:false, author:false, description:false, keywords:false}},
  ]
filteredBooks:Book[] = [];
  clearSearchProperty(book:Book){
    book.search.name = false;
    book.search.author = false;
    book.search.description = false;
    book.search.keywords = false;
  }
  updateSearchResults(){
    let allBooks = this.books.filter(el=> el.search.name || el.search.author || el.search.description || el.search.keywords);
    let booksByName = this.books.filter(el=> el.search.name);
    let booksByAuthor = this.books.filter(el=> el.search.author);
    let booksByDesription = this.books.filter(el=> el.search.description);
    let booksByKeywords = this.books.filter(el=> el.search.keywords);
    this.filterService.searchByProperties.all = allBooks.length;
    this.filterService.searchByProperties.byName = booksByName.length;
    this.filterService.searchByProperties.byAuthor = booksByAuthor.length;
    this.filterService.searchByProperties.byDescription = booksByDesription.length;
    this.filterService.searchByProperties.byKeyWords = booksByKeywords.length;
  }
  filterBooks(){
    this.filteredBooks = [];
    for(let book of this.books){
      this.clearSearchProperty(book);
      let str = this.filterService.searchString;
      book.search.name = book.name.toLowerCase().includes(str) ?  true : false;
      book.search.author = book.author.toLowerCase().includes(str) ?  true : false;
      let descArr = book.description.filter( el => el.toLowerCase().includes(str));
      book.search.description = descArr.length > 0 ? true : false;
      let keywordsArr = book.keywords.filter( el => el.toLowerCase().includes(str));
      book.search.keywords = keywordsArr.length > 0 ? true : false;
      this.updateSearchResults();
      if( str === '' ){
        this.filteredBooks.push(book);
      } else if (this.filterService.searchChosen.all){
        if (book.search.name || book.search.author || book.search.description || book.search.keywords){
          this.filteredBooks.push(book);
        }
      } else if(this.filterService.searchChosen.byName){
        if (book.search.name){
          this.filteredBooks.push(book);
        }
      } else if(this.filterService.searchChosen.byAuthor){
        if (book.search.author){
          this.filteredBooks.push(book);
        }
      } else if(this.filterService.searchChosen.byDescription){
        if (book.search.description){
          this.filteredBooks.push(book);
        }
      } else if(this.filterService.searchChosen.byKeyWords){
        if (book.search.keywords){
          this.filteredBooks.push(book);
        }
      }
    }

  }
  constructor(public filterService:FilterService) { }


}
