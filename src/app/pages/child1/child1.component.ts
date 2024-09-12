import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { NestedRecipeData, Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RecipeCardComponent } from '../../recipe-card/recipe-card.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  standalone: true,
  imports: [CommonModule, RecipeCardComponent], // Include RecipeCardComponent for displaying recipes
})
export class Child1Component implements OnInit, OnDestroy {
  recipesDatas: Recipe[] = [];
  errorMessage: string | null = null; // Variable to store error messages
  parentSubscription: Subscription = new Subscription(); // Initialize subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.parentSubscription.add(
      this.route.data.subscribe({
        next: (data: Data) => {
          // Casting data to the expected NestedRecipeData type
          const recipeData = data as NestedRecipeData;
          this.recipesDatas = recipeData.recipes.recipes; // Access the recipes array
          this.errorMessage = null; // Clear any previous error messages
        },
        error: (err) => {
          this.errorMessage = 'Failed to load recipes. Please try again later.'; // Set a user-friendly error message
          console.error('Error fetching data:', err); // Log the error for debugging purposes
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe(); // Clean up the subscription to prevent memory leaks
  }
}
