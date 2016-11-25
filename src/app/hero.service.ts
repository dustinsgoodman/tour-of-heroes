import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map((r: Response) => r.json().data as Hero[])
                    .catch(this.handleError);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
                    .map((r: Response) => r.json().data as Hero)
                    .catch(this.handleError);
  }

  create(name: string): Observable<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
                    .map((r: Response) => r.json().data as Hero)
                    .catch(this.handleError);
  }

  update(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
                    .map(() => hero)
                    .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
                    .map(() => null)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
