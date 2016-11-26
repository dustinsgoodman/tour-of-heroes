import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers: string[] = [
    'Super strength',
    'Super speed',
    'Weather changer',
    'Super flexible'
  ];

  model: Hero = new Hero(19, 'Supergirl', this.powers[0], 'Kara Danvers');
  submitted: boolean = false;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.submitted = true;
    this.heroService.create(this.model)
      .subscribe(() => this.router.navigate(['/heroes']))
  }

  newHero(): void {
    this.model = new Hero(42, '', '');
  }
}
