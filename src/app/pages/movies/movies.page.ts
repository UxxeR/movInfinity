import { IMovieDetails } from './../../services/IMovieDetails.interface';
import { MovieInformationService } from './../../services/movie-information.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public result: Observable<IMovieDetails[]>;
  public movieName: string = '';

  constructor(private movies: MovieInformationService) {}

  ngOnInit() {}

  searchChanged() {
    this.result = this.movies.findMovieByName(this.movieName);
  }
}
