import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading = true;
  constructor() { }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  getLoading() {
    return this.isLoading;
  }
}
