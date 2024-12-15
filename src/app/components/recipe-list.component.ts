import { Component, inject } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { RecipeCardComponent } from './recipe-card.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeCardComponent, LoadingSpinnerComponent],
  template: `
    @if (loading()) {
    <div class="text-center">
      <app-loading-spinner />
    </div>
    } @if (!loading()) {
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      @for (recipe of recipes(); track recipe.id) {
      <div class="col">
        <app-recipe-card [recipe]="recipe" />
      </div>
      }
    </div>
    } @if (!loading() && recipes().length === 0) {
    <div class="text-center mt-5">
      <p class="lead">No recipes found. Try a different search term.</p>
    </div>
    }
  `,
})
export class RecipeListComponent {
  #recipeService = inject(RecipeService);
  recipes = this.#recipeService.recipes;
  loading = this.#recipeService.loading;
}
