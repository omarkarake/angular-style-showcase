// recipe.resolver.ts

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NestedRecipeData } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<NestedRecipeData> {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  resolve(): Observable<NestedRecipeData> {
    return this.http.get<NestedRecipeData>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching recipes:', error);
        // Return an empty NestedRecipeData object structure
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
  }
}
