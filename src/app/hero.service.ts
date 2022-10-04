import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero.interface';
import { Heroes } from './hero.container';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  
  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]>  {
    const heroes = of(Heroes);
    this.messageService.add("HeroService: fetched heroes ");
    return heroes;
  }
}
