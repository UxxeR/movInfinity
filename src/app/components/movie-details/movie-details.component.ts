import { MovieInformationService } from './../../services/movie-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(private movies: MovieInformationService) {}

  ngOnInit() {}

  showMovieDetails() {}
}
