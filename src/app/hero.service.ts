import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IHero } from './hero';
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

  getHeroes(): Observable<IHero[]> {
    return this.httpClient.get<IHero[]>(this.heroesUrl).pipe(
      tap(() => this.log('fetched heroes'))
    );
  }

  findHero(id: number): Observable<IHero> {
    return this.httpClient.get<IHero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => this.log(`fetched hero id=${id}`))
    );
  }

  updateHero(hero: IHero): Observable<IHero> {
    return this.httpClient.put<IHero>(`${this.heroesUrl}/${hero.id}`, hero).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`))
    );
  }

  addHero(hero: IHero): Observable<IHero> {
    hero.name = hero.name.trim();
    return this.httpClient.post<IHero>(this.heroesUrl, hero).pipe(
      tap((newHero: IHero) => this.log(`added hero id=${newHero.id}`))
    );
  }

  deleteHero(id: number): Observable<IHero> {
    return this.httpClient.delete<IHero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => this.log(`deleted hero id=${id}`))
    );
  }

  searchHeroes(term: string): Observable<IHero[]> {
    term = term.trim();
    if (!term) {
      return of([]);
    }
    return this.httpClient.get<IHero[]>(`${this.heroesUrl}/?q=${term}`).pipe(
      tap((heroes: IHero[]) => heroes.length === 0 ?
        this.log(`no hero matching "${term}"`) :
        this.log(`found heroes matching "${term}"`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
