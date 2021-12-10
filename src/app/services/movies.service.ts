import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  tabMovies: Movie[] = [];

  constructor() {
    this.tabMovies = [
      new Movie('King Kong', 2012),
      new Movie('Man from Earth', 2005),
    ];
  }
}
