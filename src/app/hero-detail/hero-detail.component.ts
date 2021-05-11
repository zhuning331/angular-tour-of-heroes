import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IHero, Hero } from './../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.email])
  });

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
        .subscribe(hero => this.heroForm.patchValue(hero));
    }
  }

  addHero(): void {
    this.heroService.addHero(this.heroForm.value)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.heroForm.value.id) {
      this.heroService.updateHero(this.heroForm.value)
        .subscribe(() => this.goBack())
    } else {
      this.heroService.addHero(this.heroForm.value)
        .subscribe(() => this.goBack())
    }
  }
}
