import { Component, OnInit, Input, OnChanges, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Planet } from '../Planet';
import { GetPlanetsService } from '../get-planets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Button } from 'protractor';
import { ActiveService } from '../active.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector: 'app-root-five',
  templateUrl: './root-five.component.html',
  styleUrls: ['./root-five.component.css']
})
export class RootFiveComponent implements OnInit {
  planets:Planet[]=[];
  dividedOnFive=[];
  numberOfButtons:number[]=[];
  active=1;
  

  constructor(private activatedRoute:ActivatedRoute,private activeService:ActiveService,private getPlanets:GetPlanetsService,private router: Router, private renderer:Renderer2,private elRef: ElementRef) {

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
    for(let i=0;i<this.dividedOnFive.length;i++)
      this.numberOfButtons.push(i+1);
    });         
    this.activeService.observable.subscribe(id => {
      this.active=id;
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
 
  navigate(i){
    this.router.navigate(['/planets/five/',i]);
    this.active=i;
  }

}
