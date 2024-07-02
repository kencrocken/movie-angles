import { Component, Input, inject } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import type { MovieInfo } from '../interfaces/movie-detail';
import { LoadingService } from '../services/loading.service';
import { MoviesService } from '../services/movies.service';
import { SlugifyPipe } from '../pipes/slugify.pipe';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [DatePipe, NgFor, NgIf, RouterModule, SlugifyPipe],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.css',
})
export class MovieGridComponent {
  @Input() movies: MovieInfo[] = [];

  private movieService = inject(MoviesService);
  private loadingService = inject(LoadingService);

  getLoadingStatus() {
    return this.loadingService.getLoading();
  }

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }
}
