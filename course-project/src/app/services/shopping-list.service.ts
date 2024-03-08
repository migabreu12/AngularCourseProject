import { Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredientsChanged = new Subject<any>();
  public editIngredientInitiated = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes",  10)
  ];

  constructor() { }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]) {
    // The spread operator ... will flatten the array into single items; This is great because now we can push individual objects of an array
    // rather than pushing the array itself
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public getIngredients() {
    return this.ingredients.slice();
  }

  public getIngredient(index: number) {
    return this.ingredients[index];
  }

  public editIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
