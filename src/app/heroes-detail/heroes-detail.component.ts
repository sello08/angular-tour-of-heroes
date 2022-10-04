import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  @Input()  hero? : Hero        //hero binding from the parent component...

  constructor() { }

  ngOnInit(): void {
  }

}
