import {Component} from '@angular/core';
import {Hero} from './hero/hero.model';
import {HEROES} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Tour of Heroes';
  public heroes: Hero[] = HEROES;
  public selectedHero: Hero;

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
