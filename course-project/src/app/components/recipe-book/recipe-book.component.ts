import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent {
  public recipe: Recipe;

  public recipeSelected(recipe: Recipe) {
    this.recipe = recipe;
  }
}
