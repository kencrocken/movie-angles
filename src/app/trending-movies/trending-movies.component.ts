import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieDetail } from '../interfaces/movie-detail';
import { MovieGridComponent } from '../movie-grid/movie-grid.component';

@Component({
  selector: 'app-trending-movies',
  standalone: true,
  imports: [MovieGridComponent],
  templateUrl: './trending-movies.component.html',
  styleUrl: './trending-movies.component.css',
})
export class TrendingMoviesComponent implements OnInit {
  private movieService = inject(MoviesService);

  title = "Today's Trending Movies";
  trendingMovies: MovieDetail[] = [];

  ngOnInit(): void {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data.results;
      },
      error: (error: any) => {
        console.error('Error fetching trending movies: ', error);
      },
    });
  }
}
