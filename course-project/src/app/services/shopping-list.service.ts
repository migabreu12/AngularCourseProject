import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingredientAdded = new EventEmitter<any>()

  private ingredients: Ingredient[] = [
    {
      name: "Apple",
      amount: 5
    },
    {
      name: "Tomatoes",
      amount: 10
    }
  ];

  constructor() { }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }

  public getIngredients() {
    return this.ingredients.slice();
  }
}
