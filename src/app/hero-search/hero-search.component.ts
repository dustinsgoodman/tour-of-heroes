import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from '../hero-search.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new  Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  // Push a search term into an observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
                      .debounceTime(300) // wait 300ms pause in events
                      .distinctUntilChanged() // ignore if next term is same as current
                      .switchMap(term => { // switch to new observable each iteration
                        if (term) { // if term, return service observable
                          return this.heroSearchService.search(term);
                        } else { // otherwise, an empty observable of heroes if no term
                          return Observable.of<Hero[]>([]);
                        }
                      }) 
                      .catch(error => {
                        console.log(error);
                        return Observable.of<Hero[]>([]);
                      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
