import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',

})

export class MoviesComponent {
  title= 'Movie List';
  movies! : Movie[];
  selectedMovie! : Movie;

  ngOnInit(): void {
    this.getMovies();
  }

  constructor(private movieService:MovieService) {

  }

  onSelect(movie:Movie): void {
    this.selectedMovie = movie;
  }

  getMovies():void {
    this.movies = this.movieService.getMovies();
  }
}
