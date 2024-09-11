import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipeData } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to the imports array
})
export class Child2Component implements OnInit {
  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      const recipeData: { recipes: RecipeData } = data;
      this.recipes = recipeData.recipes.recipes.slice(5);
    });
    console.log('Child2Component initialized with recipes:', this.recipes);
  }
}
