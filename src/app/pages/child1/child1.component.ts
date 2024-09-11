import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipeData } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to the imports array
})
export class Child1Component implements OnInit {
  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      const recipeData: { recipes: RecipeData } = data;
      this.recipes = recipeData.recipes.recipes;
    });
    console.log('Child1Component initialized with recipes:', this.recipes);
  }
}
