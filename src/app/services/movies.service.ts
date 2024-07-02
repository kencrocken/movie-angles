import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { MovieDetail, MovieInfo } from '../interfaces/movie-detail';
import { Observable } from 'rxjs';

const BASE_URL = environment.apiBaseUrl;
const API_KEY = environment.apiKey;
const IMG_URL = environment.imageBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  constructor() {}

  getTrendingMovies(): Observable<{ results: MovieInfo[] }> {
    try {
      const response = this.http.get<{ results: MovieInfo[] }>(
        `${BASE_URL}/trending/movie/day?page=1&api_key=${API_KEY}`
      );
      return response;
    } catch (error) {
      // TODO: Set up message service to display error messages
      console.error('Error fetching trending movies: ', error);
      throw error;
    }
  }

  getNowPlayingMovies(): Observable<{ results: MovieInfo[] }> {
    try {
      const response = this.http.get<{ results: MovieInfo[] }>(
        `${BASE_URL}/movie/now_playing?page=1&api_key=${API_KEY}`
      );
      return response;
    } catch (error) {
      console.error('Error fetching now playing movies: ', error);
      throw error;
    }
  }

  getMovieDetail(id: number): Observable<MovieDetail> {
    try {
      const response = this.http.get<MovieDetail>(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      return response;
    } catch (error) {
      console.error('Error fetching movie detail: ', error);
      throw error;
    }
  }

  searchMovies(query: string): Observable<{ results: MovieInfo[] }> {
    try {
      const response = this.http.get<{ results: MovieInfo[] }>(
        `${BASE_URL}/search/movie?query=${query}&include_adult=false&api_key=${API_KEY}`
      );
      return response;
    } catch (error) {
      console.error('Error fetching search results: ', error);
      throw error;
    }
  }

  getImageUrl(path: string) {
    return `${IMG_URL}/w500/${path}`;
  }
}
