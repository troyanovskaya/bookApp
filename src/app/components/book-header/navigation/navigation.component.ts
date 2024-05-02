import { Component } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(public logInService: LogInService){

  }

}
