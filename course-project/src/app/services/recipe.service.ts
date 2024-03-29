import { Injectable, Output } from '@angular/core';
import { Recipe } from '../components/recipe-book/models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipesUpdated = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    {
      name: 'This is a test recipe',
      description: 'This is a test description',
      imagePath: 'https://hostthetoast.com/wp-content/uploads/2019/02/Garlic-Butter-Ribeye-Steak-and-Potatoes-6.jpg',
      ingredients: [
        new Ingredient("Test Ingredient", 10),
        new Ingredient("Another Test Ingredient", 20)
      ]
    },
    {
      name: 'Another Test Recipe',
      description: 'Another test description',
      imagePath: 'https://hostthetoast.com/wp-content/uploads/2019/02/Garlic-Butter-Ribeye-Steak-and-Potatoes-6.jpg',
      ingredients: [
        new Ingredient("Test Ingredient", 30),
        new Ingredient("Another Test Ingredient", 50)
      ]
    }
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  public getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  public updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }
}
