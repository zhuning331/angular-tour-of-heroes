import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  newHero: Hero = {id: null, name: ''};

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  addHero(): void {
    this.heroService.addHero(this.newHero)
      .subscribe(() => {
        this.newHero.name = '';
        this.getHeroes();
      });
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id)
      .subscribe(() => this.getHeroes());
  }
}
