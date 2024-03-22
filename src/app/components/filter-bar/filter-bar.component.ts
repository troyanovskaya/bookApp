import { Component } from '@angular/core';
import { SearchBy } from 'src/app/schemas/searchBy';
import { BooksService } from 'src/app/services/books.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
onclick(property:string){
  this.filterService.clearSearchChosen();
  this.filterService.searchChosen[property as keyof {all:boolean, byName:boolean, byAuthor:boolean, byDescription:boolean, byKeyWords:boolean}] = true;
  this.booksService.filterBooks();
}
constructor(public filterService: FilterService, public booksService: BooksService){}
}
