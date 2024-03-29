import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrls: ['./book-header.component.scss']
})
export class BookHeaderComponent {
  searchValue:string = '';
  onSearchChange(event: any){
    this.filterService.clearSearchProperties();
    this.booksService.filterBooks();
    this.filterService.searchString = event;
  }
  constructor(public filterService: FilterService, public booksService:BooksService){}
}
