import {Component} from '@angular/core';
import {HeroService} from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  public title = 'Tour of Heroes';
}
