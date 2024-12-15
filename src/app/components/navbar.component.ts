import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand">Recipe Hub</a>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
