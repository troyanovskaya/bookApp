import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/schemas/book';
import { FilterService } from 'src/app/services/filter.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchVal = '';
  searchGroup = 'all';
  //groups: string[] = ['all', 'byName', 'byAuthor', 'byDescription', 'byKeyWords', 'byGenres']
  bookShown: number = 10;
  chosenBooks: Book[] = [];
  showMoreBooks(){
    this.bookShown = this.bookShown + 10;
  }
  changeGroup(val: string){
    switch(val){
      case 'book_name':
        this.searchGroup = 'byName';
        break;
      case 'book_authors':
        this.searchGroup = 'byAuthor';
        break;
      case 'book_description':
        this.searchGroup = 'byDescription';
        break;
      case 'book_keywords':
        this.searchGroup = 'byKeyWords';
        break;
      case 'book_genres':
        this.searchGroup = 'byGenres';
        break;
      case 'all':
        this.searchGroup = 'all';
    }
  }
  constructor(public filterService: FilterService){}
  ngOnInit(): void {
    this.filterService.searchVal.subscribe(data => {
      this.searchVal = data;
      this.bookShown = 10;
      // console.log(this.searchGroup)
      // this.changeGroup(this.searchGroup);
    });
    this.filterService.groupVal.subscribe(data => {
      this.changeGroup(data);
    });
    this.filterService.filter();
  }
}
