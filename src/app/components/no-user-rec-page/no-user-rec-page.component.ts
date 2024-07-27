import { Component, OnInit } from '@angular/core';
import { NoUserRecService } from 'src/app/services/no-user-rec.service';

@Component({
  selector: 'app-no-user-rec-page',
  templateUrl: './no-user-rec-page.component.html',
  styleUrls: ['./no-user-rec-page.component.scss']
})
export class NoUserRecPageComponent implements OnInit{
  bookShown = 10;
  showLoader = true;
  constructor(public noUserRecService: NoUserRecService){}
  ngOnInit(): void {
    this.noUserRecService.clearAll();
    this.noUserRecService.noDataRecs();
  }
  showMoreBooks(){
    this.bookShown+= 10;
  }
}
