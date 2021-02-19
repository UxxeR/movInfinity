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
  public result: IMovieDetails[];
  public movieName: string = '';
  public loading: boolean = true;

  constructor(private movies: MovieInformationService) {}

  ngOnInit() {}

  searchChanged() {
    this.movies
      .findMovieByName(this.movieName)
      .subscribe((data: IMovieDetails[]) => {
        this.result = data;
        this.loading = false;
      });
  }
}
