import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingredientAdded = new EventEmitter<any>()

  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes",  10)
  ];

  constructor() { }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }

  public addIngredients(ingredients: Ingredient[]) {
    // The spread operator ... will flatten the array into single items; This is great because now we can push individual objects of an array
    // rather than pushing the array itself
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit();
  }

  public getIngredients() {
    return this.ingredients.slice();
  }
}
