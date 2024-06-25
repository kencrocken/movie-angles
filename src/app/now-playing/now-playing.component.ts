import { Component, inject } from '@angular/core';
import { MovieDetail } from '../interfaces/movie-detail';

import { MoviesService } from '../services/movies.service';
import { MovieGridComponent } from '../movie-grid/movie-grid.component';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [MovieGridComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.css',
})
export class NowPlayingComponent {
  private movieService = inject(MoviesService);

  title = 'Now Playing In Theaters';
  trendingMovies: MovieDetail[] = [];

  ngOnInit(): void {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    this.movieService.getNowPlayingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data.results;
      },
      error: (error: any) => {
        console.error('Error fetching now playing movies: ', error);
      },
    });
  }
}
