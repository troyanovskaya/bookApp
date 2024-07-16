import { Component, EventEmitter, Output } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
chosen = 'all';
onclick(property:string){
  this.chosen = property;
  this.filterService.onGroupValueChange(property);
}
constructor(public filterService: FilterService, public booksService: BooksService){}
}
