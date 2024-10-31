import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class SignupComponent {

constructor(private route:Router){}

  name=''
  num=0
  email=''
  password=''
  ischecked : string = 'password'
  errormesg=''
  getlocal = localStorage.getItem('item');
  obj = {}
  finalarray =[];

  signup(){
    if(this.name=='' || this.num==0 || this.email=='' || this.password=='' )
      this.errormesg = 'Enter all the info'
    else if(this.password.length<8){
      this.errormesg="password is not strong"
    }
    else if(this.num>10000000000){
      this.errormesg="Phone number is invalid"
    }
    else{
      this.obj = {
        email : this.email,
        name : this.name,
        number : this.num,
        password : this.password,
      } 
      
      if(localStorage.length<1){
        var length = localStorage.length;
        alert('You have successfully signed up')
        this.route.navigateByUrl('/login')
        localStorage.setItem('item'+length,JSON.stringify(this.obj))
      }
      else {
        var length = localStorage.length;
        localStorage.setItem('item'+length,JSON.stringify(this.obj))
        alert('You have successfully signed up')
        this.route.navigateByUrl('/login')
      // console.log(localStorage.getItem("item"))
      // this.finalarray = JSON.parse(this.getlocal)
      // this.errormesg = ''
      // this.finalarray.push({id:'item2',value:JSON.stringify(this.obj)})
      // localStorage.setItem('item',JSON.stringify(this.finalarray))
      }
      this.errormesg = ''
    }
  }

  showpassword(){
    if(this.ischecked==='password')
      this.ischecked='text'
    else if(this.ischecked==='text')
    this.ischecked='password'
  }

}
