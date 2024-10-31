import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovie } from "../movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
   private url :string ='/assets/data/movie.json'

   funcMovie():Observable<Imovie[]> {
      return this.http.get<Imovie[]>(this.url)
   }

}
