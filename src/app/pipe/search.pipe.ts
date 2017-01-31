import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'flyingHeroes',
    pure: false
})

export class pipesearch implements PipeTransform {
    transform(hero, name) {        
        console.log(hero)
        return hero
    }
}