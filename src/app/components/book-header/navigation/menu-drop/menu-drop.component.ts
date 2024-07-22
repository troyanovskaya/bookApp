import { Component, Input } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-menu-drop',
  templateUrl: './menu-drop.component.html',
  styleUrls: ['./menu-drop.component.scss']
})
export class MenuDropComponent {
  @Input() visible: boolean = false;
  constructor(public logInService: LogInService){

  }
  changeVisibility(){
    this.visible = !this.visible;

  }
}
