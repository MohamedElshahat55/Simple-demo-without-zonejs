import { Component, inject, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="mb-4">
      <!-- <input
        [ngModel]="searchQuery()"
        (ngModelChange)="updateSearch($event)"
        type="text"
        class="form-control search-input mx-auto"
        placeholder="Search recipes..."
        [attr.aria-label]="'Search recipes'"
      /> -->
    </div>
  `,
})
export class SearchBarComponent {
  // #recipeService = inject(RecipeService);
  // searchQuery = signal('');
  // constructor() {
  //   effect(() => {
  //     const search$ = toObservable(this.searchQuery).pipe(
  //       debounceTime(300),
  //       distinctUntilChanged(),
  //       switchMap((query) => {
  //         return this.#recipeService.searchRecipes(query);
  //       })
  //     );
  //     search$.subscribe({
  //       next: (recipes) => {
  //         this.#recipeService.recipes.set(recipes);
  //       },
  //     });
  //   });
  // }
  // updateSearch(query: string): void {
  //   this.searchQuery.set(query);
  //   if (query.length < 2) {
  //     this.#recipeService.recipes.set([]);
  //   }
  // }
}
