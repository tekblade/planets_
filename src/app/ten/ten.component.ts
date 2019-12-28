import { Component, OnInit, Input, Renderer2, ElementRef, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetPlanetsService } from '../get-planets.service';
import { Planets, Planet } from '../Planet';
import { EventEmitter } from 'events';
import { ActiveService } from '../active.service';
import { SearchFilterService } from '../search-filter.service';

@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent implements OnInit {
  planets:Planet[]=[];
  dividedOnTen=[];
  tenPlanetIndex:number;
  searchTerm;
  constructor(private searchFilter:SearchFilterService,private activatedRoute:ActivatedRoute,private activeService:ActiveService,private getPlanets:GetPlanetsService,private router: Router, private renderer:Renderer2,private elRef: ElementRef) { 
    activatedRoute.params.subscribe(value=>{
      this.tenPlanetIndex=value.id;
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
    this.divideOnTen();

    });    
    this.tenPlanetIndex=Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.searchFilter.getFilter().subscribe(value=>{
      this.searchTerm=value;
    });

  }
  divideOnTen(){
    let tenPlanets=[];
    for(let i=0;i<this.planets.length;i++){
      if(i!=0 && i%10==0){
        this.dividedOnTen.push(tenPlanets);
        tenPlanets=[];
      }
      tenPlanets.push(this.planets[i])
      if(i==(this.planets.length-1)){
        this.dividedOnTen.push(tenPlanets);
        tenPlanets=[];
      }
    }
  }
  details(planet){
    this.router.navigate(['/details/', planet.name]);
  } 
}
