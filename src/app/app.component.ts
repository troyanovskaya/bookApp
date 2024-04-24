import { Component, OnInit } from '@angular/core';
import { VisibilityService } from './services/visibility.service';
import { FilterService } from './services/filter.service';
import { Book } from './schemas/book';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchVal = '';
  constructor(public visibilityService: VisibilityService, public filterService: FilterService){}
  ngOnInit(): void {
    this.filterService.loadFilterService();
    this.filterService.searchVal.subscribe(data => {
      this.searchVal = data
    });

    // this.booksService.getAllBooks().subscribe( data =>{
    //   for (let i = 0; i<data.length; i++){
    //     this.booksService.books.push(data[i])
    //   }
    //   })

  }
}
