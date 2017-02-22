import {Injectable} from '@angular/core';
import {Hero} from '../hero/hero.model';
import {HEROES} from '../mock/heroes.mock';

@Injectable()
export class HeroService {

  public getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 500);
    });
  }
}
