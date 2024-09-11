import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RecipeData } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<RecipeData> {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  resolve(): Observable<RecipeData> {
    return this.http.get<RecipeData>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching recipes:', error);
        return of({ recipes: [], total: 0, skip: 0, limit: 0 }); // Return empty data on error
      })
    );
  }
}
