import { Component, EventEmitter, Output } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {
  buttonList:string[] = ['Saved', 'Read', 'Favourite', 'Dropped'];
  constructor(public logInService: LogInService){}
  chosen:String = 'Saved';
  @Output() listEmitter: EventEmitter<string> = new EventEmitter<string>()
  changeChosen(list: string){
    if(this.chosen!=list){
      this.chosen=list;
      this.listEmitter.emit(list);
    }

  }


}
