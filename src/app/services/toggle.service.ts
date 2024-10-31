import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  toggleLogin : string ='reg'
  toggleLoginafter :string='regafter'
  username=""
  goback=false
  innertext :string
  authGuard : boolean = false

  gettext(){
    return this.innertext
  }
  set_text(text:any){
    this.innertext = text
  }

  setGuard(value:boolean)
  {
    this.authGuard = value
   for (let i = 0; i < localStorage.length; i++)
   {
    if(localStorage.getItem("hello")=="world")
    {
      break
    }
    else
    {
      localStorage.setItem("hello","world")
      break
    }
   }
  }
  removeGuard(value:boolean)
  {
    this.authGuard = value
    localStorage.removeItem("hello")
  }

  getGuard(){
    return this.authGuard
  }

    setsearchbar(item:any){
     this.goback=item
    }
    getsearchbar():boolean{
    return this.goback
    }

  set_toggleLogin(data : string ){
    this.toggleLogin = data
  }

  get_toggleLogin( ){
    return this.toggleLogin
  }

  set_toggleLoginafter(data : string ){
    this.toggleLoginafter = data
  }

  get_toggleLoginafter(){
    return this.toggleLoginafter
   }

  get_username(){
    return this.username
  }

  set_username(name:string){
  this.username = name
  }

}
