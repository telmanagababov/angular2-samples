import {Component, OnInit} from '@angular/core';
import {Hero} from './hero/hero.model';
import {HeroService} from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
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
