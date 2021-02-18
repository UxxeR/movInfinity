import { IMovieDetails } from './IMovieDetails.interface';
import { Injectable } from '@angular/core';
import { concat, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieInformationService {
  private _apiKey: string = '21ff6dfb';
  private _url: string = `http://www.omdbapi.com/?apikey=${this._apiKey}&type=movie`;

  constructor(private http: HttpClient) {}

  getAllMovies() {}

  findMovieByName(title: string) {
    let _movieUrl: string = `${this._url}&s=${encodeURI(title)}`;
    return this.http
      .get<IMovieDetails[]>(_movieUrl)
      .pipe(map((result) => result['Search']));
  }

  getMovieDetails(id: string) {
    let _movieDetailsUrl: string = `${this._url}&i=${id}`;
    return this.http.get<IMovieDetails[]>(_movieDetailsUrl);
  }
}
