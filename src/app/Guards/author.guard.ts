import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToggleService } from "../services/toggle.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorGuard implements CanActivate {
  constructor(private toogle:ToggleService, private route : Router){}
  canActivate():boolean {
    console.log(this.toogle.getGuard())

  for (let i = 0; i < localStorage.length; i++) {
    if(localStorage.getItem("hello")=="world"){
      console.log("ture")
      return true
    }
    else{
      console.log("false")
      this.route.navigateByUrl("/login")
      return false}
  }
  return false
  }

}

//   if(this.toogle.getGuard()){
//     console.log("hello")
//   return true ;
//   }

//   else{
//     console.log("hello")
//     this.route.navigateByUrl("/login")
//     return false
// }
