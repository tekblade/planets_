import { Component, OnInit, OnChanges } from '@angular/core';
import { GetPlanetsService } from '../get-planets.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Planet } from '../Planet';
import { Router }  from '@angular/router';
import { SearchFilterService } from '../search-filter.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selected:any;
  planets:Planet[]=[];
  searchTerm:string;
  constructor(private searchFilter:SearchFilterService,private getPlanets:GetPlanetsService,private router: Router) { }

  ngOnInit() {
   this.searchFilter.addFilter(this.searchTerm);
   //this.searchFilter.getFilter().subscribe(val=>console.log(val));
  }
  selectAndRoute(){
    this.router.navigate([`planets/${this.selected}`]);
  }
  onSearchChange(searchValue: string): void {  
    this.searchFilter.addFilter(this.searchTerm);
  }

}
