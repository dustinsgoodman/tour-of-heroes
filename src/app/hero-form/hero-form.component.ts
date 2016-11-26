import { Component } from '@angular/core';

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

  onSubmit(): void {
    this.submitted = true;
  }

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

  // TODO: remove when we're done
  get diagnostic() { return JSON.stringify(this.model) }
}
