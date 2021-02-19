import { IMovieDetails } from './../../services/IMovieDetails.interface';
import { Component, OnInit } from '@angular/core';
import { MovieInformationService } from 'src/app/services/movie-information.service';
import { MovieDetailsProvider } from 'src/app/providers/movie-details-provider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  public movieDetails;
  public loading: boolean = true;

  constructor(
    private movies: MovieInformationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getDetails();
  }

  private getDetails() {
    this.movies
      .getMovieDetails(this.route.snapshot.paramMap.get('imdbID'))
      .subscribe((data) => {
        this.movieDetails = data;
        this.loading = false;
      });
  }
}
