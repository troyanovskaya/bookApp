import { Component } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-btn-read',
  templateUrl: './btn-read.component.html',
  styleUrls: ['./btn-read.component.scss']
})
export class BtnReadComponent {
  states:string[] = ["Unread", "Read", "Saved", "Dropped"]
  visible:boolean=false;
  currentState:string = this.states[0];
  dropdown(){
    this.visible=!this.visible;
  }
  changeListItem(index:number){
    this.currentState = this.states[index];
    this.dropdown();
  }
  constructor(public logInService: LogInService){}
}
