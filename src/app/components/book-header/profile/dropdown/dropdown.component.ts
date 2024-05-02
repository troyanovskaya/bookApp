import { Component, Input } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() visible: boolean = false;
  constructor(public logInService: LogInService){

  }
  signOut(){
    this.logInService.logOut();
    this.visible = false;

  }

}
