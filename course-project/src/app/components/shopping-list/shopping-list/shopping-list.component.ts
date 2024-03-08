import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  public ingredientAddedSubscription: Subscription;

  public constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientAddedSubscription = this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
      // Decided this approach since it seems expensive to emit the full array rather than emitting that
      // the ingredients have changed and then leave the reaction to the emitter consuming code.
      this.ingredients = ingredients;
    });
  }

  public ngOnDestroy(): void {
    this.ingredientAddedSubscription.unsubscribe();  
  }

  public initiateEdit(index: number) {
    this.shoppingListService.editIngredientInitiated.next(index);
  }
}
