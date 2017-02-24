import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/hero.model';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-heroes-container',
  templateUrl: './heroes-container.component.html',
  styleUrls: ['./heroes-container.component.css']
})
export class HeroesContainerComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }
}
