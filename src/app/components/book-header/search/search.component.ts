import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output()
  newSearch: EventEmitter<string> = new EventEmitter<string>();

  searchVal:string = '';
  onInputChange(){
    this.searchVal = this.searchVal.trim().toLowerCase();
    this.newSearch.emit(this.searchVal);
    
  }

}


