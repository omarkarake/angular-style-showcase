import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipeData } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RecipeCardComponent } from '../../recipe-card/recipe-card.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  standalone: true,
  imports: [CommonModule, RecipeCardComponent], // Add RecipeCardComponent to the imports array
})
export class Child1Component implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  parentSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.parentSubscription.add(
      this.route.data.subscribe((data: any) => {
        const recipeData: { recipes: RecipeData } = data;
        this.recipes = recipeData.recipes.recipes;
      })
    );
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
  }
}