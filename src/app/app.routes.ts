import { Routes } from '@angular/router';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'daily-trending',
    pathMatch: 'full',
  },
  {
    path: 'daily-trending',
    component: TrendingMoviesComponent,
    title: 'Trending Movies',
  },
  {
    path: 'now-playing',
    component: NowPlayingComponent,
    title: 'Now Playing',
  },
  {
    path: 'detail/:title',
    component: MovieDetailComponent,
    title: 'Movie Detail',
  },
  {
    path: 'search',
    component: SearchMoviesComponent,
    title: 'Search Results',
  },
];
