import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipe-book/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
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

  constructor() { }

  public getRecipes() {
    return this.recipes.slice();
  }
}
