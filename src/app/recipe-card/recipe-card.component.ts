import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}