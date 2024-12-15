import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Recipe, RecipeResponse } from '../Types/recipe';
import { Observable, tap, catchError, finalize, shareReplay, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://dummyjson.com/recipes';

  #loading = signal(false);
  #error = signal<string | null>(null);
  #searchTerm = signal('');
  #http = inject(HttpClient);

  loading = computed(() => this.#loading());
  error = computed(() => this.#error());
  searchTerm = computed(() => this.#searchTerm());

  private recipes$ = this.#http.get<RecipeResponse>(`${this.baseUrl}`).pipe(
    map((res) => {
      return res.recipes;
    }),
    tap(() => {
      this.#loading.set(true);
      this.#error.set(null);
    }),
    shareReplay(1),
    catchError((error) => {
      this.#error.set(this.handleError(error));
      return [];
    }),
    finalize(() => {
      this.#loading.set(false);
    })
  );

  // Expose signals from this service
  recipes = toSignal(this.recipes$, { initialValue: [] as Recipe[] });

  private handleError(error: HttpErrorResponse): never {
    let errorMessage = 'An error occurred. Please try again later.';

    if (error.status === 0) {
      errorMessage =
        'Unable to connect to the server. Please check your internet connection.';
    } else if (error.status === 404) {
      errorMessage = 'The requested recipes could not be found.';
    }

    this.#error.set(errorMessage);
    throw error;
  }
}
