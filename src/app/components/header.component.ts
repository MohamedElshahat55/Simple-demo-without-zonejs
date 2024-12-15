import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { SearchBarComponent } from './search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, NavbarComponent, HeroComponent],
  template: `
    <app-navbar />
    <app-hero />

    <div class="container">
      <div class="text-center mb-5">
        <h2 class="h3 mb-4">Find Your Perfect Recipe</h2>
        <!-- <app-search-bar /> -->
      </div>
    </div>
  `,
})
export class HeaderComponent {}
