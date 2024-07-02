import { DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MovieDetail, MovieInfo } from '../interfaces/movie-detail';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.development';

const IMG_URL = environment.imageBaseUrl;

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  private movieService = inject(MoviesService);
  title = 'Movie Detail';
  movie = signal<MovieDetail | undefined>(undefined);

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadMovieDetail();
  }

  loadMovieDetail() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.movieService.getMovieDetail(params['id']).subscribe({
        next: (data) => {
          this.movie.set(data);
        },
        error: (error: any) => {
          console.error('Error fetching movie detail: ', error);
        },
      });
    });
  }

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }
}
