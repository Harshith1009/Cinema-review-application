import { Injectable, OnChanges, SimpleChanges  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewDetailsService  {

   id : number
   name :string=''
  //  id = 10
  constructor() { }

  getname():string{
    return this.name
  }
  setname(event:string){
    this.name = event
  }

  getid() : number {
    return this.id
  }

  setid(num : number){
  this.id = num
  }

}
