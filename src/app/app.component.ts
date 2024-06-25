import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { SpinnerComponent } from './spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NgClass,
    TrendingMoviesComponent,
    SpinnerComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  router = inject(Router);
  title = 'Movie Angles';
  isMenuOpen = false;
  movieSearch = new FormGroup({
    movieTitle: new FormControl(''),
  });

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  submitMovieSearch() {
    console.log(this.movieSearch.value);
    this.router.navigate(['/search'], {
      queryParams: { movietitle: this.movieSearch.value.movieTitle },
    });
  }
}
