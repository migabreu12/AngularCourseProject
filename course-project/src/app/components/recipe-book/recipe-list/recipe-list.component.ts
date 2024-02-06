import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent  {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>;

  public recipes: Recipe[] = [
    {
      name: 'This is a test recipe',
      description: 'This is a test description',
      imagePath: 'https://hostthetoast.com/wp-content/uploads/2019/02/Garlic-Butter-Ribeye-Steak-and-Potatoes-6.jpg'
    },
    {
      name: 'Another Test Recipe',
      description: 'Another test description',
      imagePath: 'https://hostthetoast.com/wp-content/uploads/2019/02/Garlic-Butter-Ribeye-Steak-and-Potatoes-6.jpg'
    }
  ];

  public emitSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
