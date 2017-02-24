import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../model/hero.model';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  styleUrls: ['./hero-badge.component.css']
})
export class HeroBadgeComponent implements OnInit {
  @Input() model: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
