import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

import { IHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('flyIn', [
      transition(':increment', [
        query('li', [
          style({ opacity: 0, transform: 'translateX(-100%)' }),
          stagger(20, [
            animate(200)
          ])
        ])
      ])
    ]),
    trigger('flyOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':leave', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

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

  deleteHero(id: number): void {
    this.heroService.deleteHero(id)
      .subscribe(() => this.heroes = this.heroes.filter(hero => hero.id !== id));
  }
}
