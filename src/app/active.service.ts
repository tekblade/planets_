import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {
  subject = new BehaviorSubject<any>(1);
  observable = this.subject.asObservable();
  constructor() { }
  
}
