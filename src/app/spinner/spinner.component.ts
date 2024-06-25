import { NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  private loadingService = inject(LoadingService);

  getLoadingStatus() {
    return this.loadingService.getLoading();
  }
}
