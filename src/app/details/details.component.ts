import { Component, OnInit } from '@angular/core';
import { Planet } from '../Planet';
import { GetPlanetsService } from '../get-planets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  planets:Planet[]=[];
  planetName:string;
  choosedPlanet;
  flag:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private getPlanets:GetPlanetsService) { }

  ngOnInit() {
    
    this.planetName=this.activatedRoute.snapshot.paramMap.get("id");
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
      for(let i=0;i<this.planets.length;i++){
        if(this.planetName==this.planets[i].name){
          this.choosedPlanet=this.planets[i];
        }
      }
      this.flag=true;
    });         
    
    
    
  }

}
