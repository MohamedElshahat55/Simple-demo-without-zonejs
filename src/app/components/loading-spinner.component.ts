import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="spinner-border loading-spinner" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `,
})
export class LoadingSpinnerComponent {}
