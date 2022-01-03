import { Component } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from "../movie.datasourse";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',

})

export class MoviesComponent {
  title= 'Movie List';
  movies = Movies;
  selectedMovie! : Movie

  onSelect(movie:Movie): void {
    this.selectedMovie = movie;
  }


}
