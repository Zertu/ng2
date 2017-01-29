import { arrayify } from 'tslint/lib/utils';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

import { hero } from './hero';
import { HEROES } from './herolist';

@Injectable()
export class HeroService {
  getall(): Array<hero> {
    return HEROES
  }
  getHero(id: number): Object {
    let s = HEROES.find(hero => hero.id === id)
    return s;
  }
}