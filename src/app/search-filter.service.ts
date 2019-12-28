import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
  private filter:Subject<any> = new BehaviorSubject<any>([]);
  constructor() { }
  addFilter(filter){
    this.filter.next(filter);
  }
  getFilter(){
    return this.filter;
  }
}
