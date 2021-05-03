import { Component, OnInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, map, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const searchBox = this.elementRef.nativeElement.querySelector('#search-box');
    fromEvent(searchBox, 'keyup').pipe(
      // 將 fromEvent 收到的 KeyboardEvent 物件轉成輸入值
      map((evt: KeyboardEvent) => (<HTMLInputElement>evt.target).value),

      // 等待 300 ms 後再把最後的輸入值發出
      debounceTime(300),

      // 忽略掉與前一次相同的輸入值
      distinctUntilChanged(),

      // 將最後收到的輸入值轉成搜尋英雄的 Observable 以準備訂閱
      switchMap((term: string) => this.heroService.searchHeroes(term))
    ).subscribe(heroes => this.heroes = heroes);
  }
}
