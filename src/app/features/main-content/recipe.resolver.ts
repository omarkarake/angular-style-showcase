import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NestedRecipeData } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<NestedRecipeData> {
  private apiUrl = 'https://dummyjson.com/recipes';
  private fallbackUrl: string = 'assets/recipeData.json';

  constructor(private http: HttpClient) {}

  resolve(): Observable<NestedRecipeData> {
    return this.http.get<NestedRecipeData>(this.apiUrl).pipe(
      retry(1),
      catchError((error) => {
        console.error(
          'Error fetching recipes from API, loading fallback data:',
          error
        );
        // If the API call fails, fetch data from the local JSON file
        return this.http.get<NestedRecipeData>(this.fallbackUrl).pipe(
          catchError((fallbackError) => {
            console.error('Error fetching fallback recipes:', fallbackError);
            // If the fallback also fails, return an empty NestedRecipeData structure
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
      })
    );
  }
}
