import { MovieInformationService } from './../../services/movie-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public result;
  public movieName: string = '';

  constructor(private movies: MovieInformationService) {}

  ngOnInit() {}

  searchChanged() {
   this.result = this.movies.findMovieByName(this.movieName);
  }
}
