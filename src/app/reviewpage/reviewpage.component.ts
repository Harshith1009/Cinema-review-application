import { Component,OnChanges,SimpleChanges,Input } from '@angular/core';
import { ReviewDetailsService } from "../services/review-details.service";
import { MovieService } from "../services/movie.service";
import { Imovie } from '../movie';
import { ToggleService } from '../services/toggle.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent  {

  id : number
  name : string
  thisarray:any ={
    id:null,
    img : null,
    rating : null,
    name :null
  }

constructor(private rev : ReviewDetailsService , private mdetails : MovieService,private toggle : ToggleService,private route :Router){

}

@Input('rev') number :string

ngOnInit(){
  this.toggle.setsearchbar(true)
 this.id =  this.rev.getid()
 this.name = this.rev.getname()
 this.mdetails.funcMovie().subscribe((data) => {

  for (let i = 0; i < data.length; i++) {
    if(this.id==data[i].id){
      this.thisarray = data[i]
      console.log(this.thisarray)
      console.log(this.id)
    }
  }
})

this.mdetails.funcMovie().subscribe((data) => {

  for (let i = 0; i < data.length; i++) {
    if(this.name==data[i].name){
      this.thisarray = data[i]
      console.log(this.thisarray)
      console.log(this.id)
    }
  }
})

}

// ngOnChanges(changes : SimpleChanges ){
//   var youChanged = changes[this.rev.getid()]
//   this.id = Number(youChanged)
// }

goBack(){
this.route.navigateByUrl('/openpage')
this.toggle.setsearchbar(false);
this.toggle.set_text('')
console.log(this.name)
this.rev.setname('')
}

}
