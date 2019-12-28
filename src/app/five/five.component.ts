import { Component, OnInit, Input, Renderer2, ElementRef, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetPlanetsService } from '../get-planets.service';
import { Planets, Planet } from '../Planet';
import { EventEmitter } from 'events';
import { ActiveService } from '../active.service';
import { SearchFilterService } from '../search-filter.service';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  planets:Planet[]=[];
  dividedOnFive=[];  
  fivePlanetIndex:number;
  searchTerm;
  constructor(private searchFilter:SearchFilterService,private activatedRoute:ActivatedRoute,private activeService:ActiveService,private getPlanets:GetPlanetsService,private router: Router, private renderer:Renderer2,private elRef: ElementRef) { 
    activatedRoute.params.subscribe(value=>{
      this.fivePlanetIndex=value.id;
      this.activeService.subject.next(value.id)
    });
  }

  ngOnInit() {
    let myArray=this.getPlanets.getAllPlanets()
    let helpArray=[];
    myArray.subscribe(value=>{
      for(let i=0;i<value.length;i++){
        helpArray.push(value[i].results);
      }
      for(let i=0;i<helpArray.length;i++){
        for(let j=0;j<helpArray[i].length;j++){
          this.planets.push(helpArray[i][j]);
        }
      }
    this.divideOnFive();

    });    
    this.fivePlanetIndex=Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.searchFilter.getFilter().subscribe(value=>{
      this.searchTerm=value;
    });

  }
  divideOnFive(){
    let fivePlanets=[];
    for(let i=0;i<this.planets.length;i++){
      if(i!=0 && i%5==0){
        this.dividedOnFive.push(fivePlanets);
        fivePlanets=[];
      }
      fivePlanets.push(this.planets[i])
      if(i==(this.planets.length-1)){
        this.dividedOnFive.push(fivePlanets);
        fivePlanets=[];
      }
    }
  }
  details(planet){
    this.router.navigate(['/details/', planet.name]);
  } 
}
