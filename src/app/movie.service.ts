import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasourse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return Movies;
  }
}
