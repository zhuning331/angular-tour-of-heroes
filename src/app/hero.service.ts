import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'http://localhost:3000/heroes';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      tap(() => this.log('fetched heroes'))
    );
  }

  findHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => this.log(`fetched hero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    hero.name = hero.name.trim();
    return this.httpClient.post<Hero>(this.heroesUrl, hero).pipe(
      tap((newHero: Hero) => this.log(`added hero id=${newHero.id}`))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => this.log(`deleted hero id=${id}`))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();
    if (!term) {
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}/?q=${term}`).pipe(
      tap((heroes: Hero[]) => heroes.length === 0 ?
        this.log(`no hero matching "${term}"`) :
        this.log(`found heroes matching "${term}"`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
