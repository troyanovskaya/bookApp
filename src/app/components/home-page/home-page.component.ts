import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchVal = '';
  bookShown: number = 10;
  showMoreBooks(){
    this.bookShown = this.bookShown + 10;
  }
  constructor(public filterService: FilterService){}
  ngOnInit(): void {
    this.filterService.loadFilterService();
    this.filterService.searchVal.subscribe(data => {
      this.searchVal = data;
      this.bookShown = 10;
    });

    // this.booksService.getAllBooks().subscribe( data =>{
    //   for (let i = 0; i<data.length; i++){
    //     this.booksService.books.push(data[i])
    //   }
    //   })

  }
}
