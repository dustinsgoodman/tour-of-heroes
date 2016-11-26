import { InMemoryDbService  } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes: Hero[] = [
      new Hero(11, 'Wolverine', 'Accelerated healing & bone claws', 'Logan'),
      new Hero(12, 'Cyclops', 'Laser eyes', 'Scott Summers'),
      new Hero(13, 'Superman', 'Super strength, speed, hearing, breath, invincibility, etc.', 'Clark Kent'),
      new Hero(14, 'Batman', 'World\'s greatest detective', 'Bruce Wayne'),
      new Hero(15, 'Iron Man', 'Rich kid with toys', 'Tony Stark'),
      new Hero(16, 'Hulk', 'Super strength and regenerative healing induced by rage', 'Bruce Banner'),
      new Hero(17, 'Martian Man Hunter', 'Telepathy, shape shifter, phasing, strength, flight', 'John Jones'),
      new Hero(18, 'The Flash', 'Super speed', 'Barry Allen')
    ];
    return {heroes};
  }
}
