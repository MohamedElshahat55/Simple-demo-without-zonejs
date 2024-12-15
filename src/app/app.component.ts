import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { HeaderComponent } from './components/header.component';
import { RecipeListComponent } from './components/recipe-list.component';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-app';
}
