
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { Heroes } from './../hero.container';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero? : Hero;
  public heroes = Heroes;

  constructor() {
  }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
