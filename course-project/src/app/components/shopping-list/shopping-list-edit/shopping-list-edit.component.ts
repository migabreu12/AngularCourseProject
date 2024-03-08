import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  public ingredientForm: FormGroup;
  public editMode = false;
  private indexOfIngredient: number; 

  public constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "amount": new FormControl(null, [Validators.required, Validators.min(0)])
    });

    this.shoppingListService.editIngredientInitiated
      .subscribe((index) => {
        this.editMode = true;
        this.indexOfIngredient = index;
        // This will not work in an async method
        const ingredientToEdit = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          "name": ingredientToEdit.name,
          "amount": ingredientToEdit.amount
        });
      });
  }

  public submit() {
    if(this.editMode) {
      // Using the ingredientForm.value as the parameter only works because the javascript object of the form group
      // is identical to the Ingredient object.
      this.shoppingListService.editIngredient(this.indexOfIngredient, this.ingredientForm.value);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(
        new Ingredient(
          this.ingredientForm.get("name").value,
          this.ingredientForm.get("amount").value
        ));
    }
  }

  public clear() {
    this.editMode = false;
    this.ingredientForm.reset();
    this.indexOfIngredient = null;
  }
}
