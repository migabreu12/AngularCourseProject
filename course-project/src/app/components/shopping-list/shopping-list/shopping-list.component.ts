import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];

  public constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientAdded.subscribe(() => {
      // Decided this approach since it seems expensive to emit the full array rather than emitting that
      // the ingredients have changed and then leave the reaction to the emitter consuming code.
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }
}
