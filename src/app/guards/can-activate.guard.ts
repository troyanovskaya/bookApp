import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInService } from '../services/log-in.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  logInService: LogInService = inject(LogInService);
  router: Router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = this.logInService.user;
      if(user){
        return true;
      } else{
        this.router.navigate(['home']);
      }
      return Boolean(this.logInService.user);
  }

}
