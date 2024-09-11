import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipeData } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to the imports array
})
export class Child2Component implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  parentSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.parentSubscription.add(
      this.route.data.subscribe((data: any) => {
        const recipeData: { recipes: RecipeData } = data;
        this.recipes = recipeData.recipes.recipes.slice(5);
      })
    );
    console.log('Child2Component initialized with recipes:', this.recipes);
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
  }
}
