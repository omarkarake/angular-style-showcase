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
  recipes: Recipe[] = [];
  parentSubscription: Subscription = new Subscription(); // Initialize subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.parentSubscription.add(
      this.route.data.subscribe((data: Data) => {
        // Casting data to the expected NestedRecipeData type
        const recipeData = data['recipes'] as NestedRecipeData; // Adjust key if necessary
        console.log(recipeData.recipes);
      })
    );
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe(); // Clean up the subscription
  }
}
