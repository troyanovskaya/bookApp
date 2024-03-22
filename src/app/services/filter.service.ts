import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
searchString:string = '';
searchByProperties:{all:number, byName:number, byAuthor:number, byDescription:number, byKeyWords:number} =
{all: 0,byName: 0, byAuthor:0, byDescription:0, byKeyWords:0};
searchChosen:{all:boolean, byName:boolean, byAuthor:boolean, byDescription:boolean, byKeyWords:boolean} =
{all: true,byName: false, byAuthor:false, byDescription:false, byKeyWords:false}
clearSearchProperties(){
  this.searchByProperties.all = 0;
  this.searchByProperties.byName = 0;
  this.searchByProperties.byAuthor = 0;
  this.searchByProperties.byDescription = 0;
  this.searchByProperties.byKeyWords = 0;
}
clearSearchChosen(){
  this.searchChosen.all = false;
  this.searchChosen.byName = false;
  this.searchChosen.byAuthor = false;
  this.searchChosen.byDescription = false;
  this.searchChosen.byKeyWords = false;
}
constructor() { }
}
