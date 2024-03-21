import { Component } from '@angular/core';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  openRegistrationWindow(){
    this.visibilityService.showRegistrationForm=true;
    this.visibilityService.showSignForm=false;
  }
  constructor(public visibilityService: VisibilityService){}

}
