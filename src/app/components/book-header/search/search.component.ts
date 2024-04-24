import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchVal:string = '';
  constructor(public filterService: FilterService){}
  onInputChange(){
    this.searchVal = this.searchVal.trim().toLowerCase();
    this.filterService.onSearchValueChange(this.searchVal);

  }

}


