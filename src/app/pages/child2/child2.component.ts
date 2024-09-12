import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { NestedRecipeData, Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RecipeCardComponent } from '../../recipe-card/recipe-card.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent], // Add RecipeCardComponent to the imports array
})
export class Child2Component implements OnInit, OnDestroy {
  recipesDatas: Recipe[] = [];
  parentSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.parentSubscription.add(
      this.route.data.subscribe((data: Data) => {
        // Casting data to the expected NestedRecipeData type
        const recipeData = data as NestedRecipeData; // Adjust key if necessary
        this.recipesDatas = recipeData.recipes.recipes.slice(6);
      })
    );
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
  }
}
