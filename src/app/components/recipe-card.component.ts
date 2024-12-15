import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Recipe } from '../Types/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="card h-100 recipe-card">
      <img [src]="recipe().image" class="card-img-top" [alt]="recipe().title" />
      <div class="card-body">
        <h5 class="card-title">{{ recipe().title }}</h5>
        <p class="card-text">
          <small>{{ recipe().cuisine }} • {{ recipe().difficulty }}</small>
        </p>
        <div class="d-flex align-items-center mb-2">
          <div class="me-2">Rating:</div>
          <div class="text-warning">
            {{ '★'.repeat(Math.round(recipe().rating)) }}
          </div>
        </div>
        <p class="card-text">
          <small>
            Prep: {{ recipe().prepTimeMinutes }}min • Cook:
            {{ recipe().cookTimeMinutes }}min
          </small>
        </p>
        <div class="mt-2">
          <span
            *ngFor="let tag of recipe().tags.slice(0, 3)"
            class="badge bg-secondary me-1"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class RecipeCardComponent {
  recipe = input.required<Recipe>();
  protected Math = Math;
}
