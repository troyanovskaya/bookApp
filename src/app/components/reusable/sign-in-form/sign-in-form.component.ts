import { Component } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  email:String = '';
  password: String = '';
  openRegistrationWindow(){
    this.visibilityService.showRegistrationForm=true;
    this.visibilityService.showSignForm=false;
  }
  onSignInClick(){
    this.logInService.getUserByEmailPassword(this.password, this.email).subscribe( data =>{
      if(data.body){
        this.logInService.user = data.body;
        localStorage.setItem('userObject', JSON.stringify(this.logInService.user));
        this.visibilityService.showSignForm=false;
      } else{
        console.log('Odd error')
      }

    })
  }
  constructor(public visibilityService: VisibilityService, public logInService: LogInService){}

}
