import { Component } from '@angular/core';
import {  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToggleService } from '../services/toggle.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  id=''
  password=''
  errormesg = ''
  ischecked =  'password'
  toggleLogin ='reg'
  toggleLoginafter ='regafter'


  constructor(private router:Router, private toggle:ToggleService){}

  checkCredentials(){
    if(this.id==''||this.password==''){
      this.errormesg = 'Sign up if you dont have a account'
    }
    else{
     for (let i = 0; i < localStorage.length ; i++) {
      var getLocal = JSON.parse(localStorage.getItem("item"+i)||'{}')
      if(this.id==getLocal.email && this.password==getLocal.password){

        this.toggle.set_toggleLogin('regafter')
        this.toggle.set_toggleLoginafter('reg')
        this.toggle.set_username(getLocal.name)
        this.toggle.setGuard(true)

        this.router.navigateByUrl('/openpage')                              //router navigation
      }
     else
       this.errormesg = 'you have entered a wrong credentials'
     }
    }
  }

  ischeckedfunc(){
    if(this.ischecked==='password')
      this.ischecked='text'
    else if(this.ischecked==='text')
    this.ischecked='password'
  }

}
