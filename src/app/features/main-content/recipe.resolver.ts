// recipe.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NestedRecipeData } from '../../models/recipe.model';
import { LoaderService } from '../../services/loader.service'; // Adjust path as necessary

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<NestedRecipeData> {
  private apiUrl = 'https://dummyjson.com/recipes';
  private fallbackUrl = 'assets/recipeData.json';

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  resolve(): Observable<NestedRecipeData> {
    this.loaderService.show(); // Show the loader when starting to fetch data

    return this.http.get<NestedRecipeData>(this.apiUrl).pipe(
      retry(1),
      catchError((error) => {
        console.error('Error fetching recipes from API, loading fallback data:', error);
        // Fetch data from the local JSON file if the API call fails
        return this.http.get<NestedRecipeData>(this.fallbackUrl).pipe(
          catchError((fallbackError) => {
            console.error('Error fetching fallback recipes:', fallbackError);
            // Return an empty NestedRecipeData structure if the fallback also fails
            return of({
              recipes: {
                recipes: [],
                total: 0,
                skip: 0,
                limit: 0,
              },
            });
          })
        );
      }),
      finalize(() => this.loaderService.hide()) // Hide the loader when the data fetch is complete, whether successful or not
    );
  }
}
