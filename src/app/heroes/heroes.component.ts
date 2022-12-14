import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from './../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero? : Hero;
  public heroes : Hero[] = [];

  constructor( private heroService : HeroService, private messageService : MessageService) {
  }

  ngOnInit(): void {
    return this.getHeroes()
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //this.messageService.add();
  }
  getHeroes() : void  {
     this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
  }

}
