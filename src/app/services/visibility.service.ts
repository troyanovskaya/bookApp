import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  showSignForm:boolean = false;
  constructor() { }
}
