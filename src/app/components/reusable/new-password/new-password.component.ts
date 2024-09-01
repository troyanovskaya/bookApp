import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  token?:String;
  @ViewChild('newPasswordForm') form?: NgForm;
  constructor(public visibilityService: VisibilityService, public logInService: LogInService,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.token = params['token'];
      console.log(this.token);
    })
  }
  onPasswordSend(){
    let password1 = this.form?.value.password1.trim();
    let password2 = this.form?.value.password2.trim();
    if(password1 !== password2){
      alert('Passwords are not the same!');
    } else if ( password1 && password2){
      this.logInService.newPassword(this.token, password1).subscribe(
        data =>{
          if(data.token && data.user){
            this.logInService.token = data.token;
            localStorage.setItem('token', data.token);
            this.logInService.user = data.user;
          }
        }
      );
    } else{
      alert('Please, fill all the fields!');
    }
  }

}
