import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IHero, Hero } from './../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: IHero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.findHero();
  }

  findHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.findHero(id)
        .subscribe(hero => this.hero = hero);
    } else {
      this.hero = new Hero();
    }
  }

  addHero(): void {
    this.heroService.addHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero.id) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    } else {
      this.heroService.addHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }
}
