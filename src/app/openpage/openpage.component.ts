import { Component } from '@angular/core';
import { MovieService } from "../services/movie.service";
import {Imovie} from "../movie"
import { Router } from '@angular/router';
import { ReviewDetailsService } from "../services/review-details.service";
import { ToggleService } from '../services/toggle.service';


@Component({
  selector: 'app-openpage',
  templateUrl: './openpage.component.html',
  styleUrls: ['./openpage.component.css']
})
export class OpenpageComponent {

public thearray:any =[]

constructor(private movie:MovieService, private route:Router, private rev : ReviewDetailsService,private toggle:ToggleService){}

ngOnInit(){
   this.movie.funcMovie().subscribe((data) => {this.thearray=data})
 }

  navRev(item:any){
  this.rev.setid(item)
  this.route.navigateByUrl('review')
    this.toggle.setsearchbar(true)
}

}
