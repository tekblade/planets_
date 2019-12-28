import {PipeTransform,Pipe} from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
    name:'filter',
    pure:false
})
export class FilterPipe implements PipeTransform {
    transform(planets, searchTerm:string) {
        if(!planets || !searchTerm){
            return planets;
        }
    return planets.filter(planet =>
      planet.name.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1);
    }
}