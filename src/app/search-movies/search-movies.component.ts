import { Component, OnInit, inject, signal } from '@angular/core';
import { MovieGridComponent } from '../movie-grid/movie-grid.component';
import { MoviesService } from '../services/movies.service';
import { MovieDetail } from '../interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-movies',
  standalone: true,
  imports: [MovieGridComponent],
  templateUrl: './search-movies.component.html',
  styleUrl: './search-movies.component.css',
})
export class SearchMoviesComponent implements OnInit {
  moviesService = inject(MoviesService);
  title = 'Search Results';
  searchResults = signal<MovieDetail[]>([]);

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.moviesService.searchMovies(params['movietitle']).subscribe({
        next: (data) => {
          this.searchResults.set(data.results);
        },
        error: (error: any) => {
          console.error('Error fetching search results: ', error);
        },
      });
    });
  }
}
