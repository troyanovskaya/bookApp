import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/schemas/user';
import { LogInService } from 'src/app/services/log-in.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  user?: User;
  constructor(public logInService: LogInService, private router: Router){}
  ngOnInit(): void {
    if(this.logInService.user){
      this.user = this.logInService.user;
    }
  }
  logOut(){
    this.logInService.logOut();
    this.router.navigate(['/'])
  }

}
