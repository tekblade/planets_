import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Planet, Planets } from './Planet';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { forkJoin } from 'rxjs';
import { map, share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetPlanetsService {
  url='https://swapi.co/api/planets/?page=';
  planets:Planet[]=[];
  dividedOnFive=[];
  dividedOnTen=[];
  dividedOnTwentyFive=[];
  dividedOnOneHundred=[];
  headers: HttpHeaders = new HttpHeaders()
    .set('Accept', 'application/json');
  
  constructor(private http:HttpClient) { }


  getPlanet(pageIndex){                                          
    return this.http.get<Planets>(`${this.url}${pageIndex}`,{headers:this.headers});
  }
  getAllPlanets(){
    let numberOfPages=7;  // Tried to do it dynamically but got infinite loop
    const response = [...Array(numberOfPages).keys()].map(i => this.getPlanet(i+1));
    return forkJoin(response).pipe(map(value=> value),share());
  
  } 

}
