import { Component,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { ToggleService } from '../services/toggle.service';
import { ReviewDetailsService } from "../services/review-details.service";
import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { map,startWith } from "rxjs/operators";     //autoSearchCode***

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() redirect:EventEmitter<any> = new EventEmitter();

  toggleLogin = ''
  toggleLoginafter = ''
  name =''
  isdisabled : boolean
  public thearray:any = []
  textie :string
  myControl = new FormControl();
  filteredOptions :Observable<string[]>

  constructor(public route:Router , private toggle : ToggleService , private movieDetails :MovieService,private rev : ReviewDetailsService){}

   ngOnInit(){
    this.movieDetails.funcMovie().subscribe((data) => {this.thearray=data})

    this.filteredOptions =this.myControl.valueChanges.pipe(               //autoSearchCode***
      startWith(''),
      map(value => this._filter(value))
      );
  //   this.toggleLogin=  this.toggle.get_toggleLogin()
  //   this.toggleLoginafter=  this.toggle.get_toggleLoginafter()
   }

   private _filter(value:string):string[]{                                //autoSearchCode***
    const filterValue = value.toLowerCase()
    var thearrayName =[]
    for(let i =0;i<this.thearray.length;i++){
      thearrayName[i] = this.thearray[i].name
    }
    return thearrayName.filter(option =>
       option.toLowerCase().includes(filterValue))
   }

  ngDoCheck() {
     this.name = this.toggle.get_username()
     this.toggleLogin=  this.toggle.get_toggleLogin()
     this.toggleLoginafter=  this.toggle.get_toggleLoginafter()
     this.isdisabled = this.toggle.getsearchbar()

  }

  logout()
  {
        this.toggle.set_username("")
        this.toggle.set_toggleLogin('reg')
        this.toggle.removeGuard(false)
        this.toggle.set_toggleLoginafter('regafter')
        console.log(this.thearray)
  }

  navRev(item:any){
    this.rev.setname(item)
    this.toggle.setsearchbar(true)
    this.route.navigateByUrl('review')
    console.log(item)
  }


}
