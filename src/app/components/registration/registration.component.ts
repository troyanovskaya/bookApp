import { Component } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: String = '';
  login: String = '';
  password1: String = '';
  password2: String = '';
  constructor(public visibilityService: VisibilityService, public logInService: LogInService){}
  onRegistrationSend(){
    this.email = this.email.trim();
    this.login = this.login.trim();
    this.password1 = this.password1.trim();
    this.password2 = this.password2.trim();
    if(this.password1 !== this.password2){
      alert('Passwords are not the same!');
    } else if ( this.email && this.login && this.password1 && this.password2){
      this.logInService.registerNewUser(this.password1, this.login, this.email).subscribe(
        data =>{
          console.log(data);
          this.visibilityService.showSignForm = true;
          this.visibilityService.showRegistrationForm = false;
        }
      );
    } else{
      alert('Please, fill all the fields!');
    }
  }

}
