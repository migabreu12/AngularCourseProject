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

  public constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "amount": new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  public submit() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.ingredientForm.get("name").value,
        this.ingredientForm.get("amount").value
      ));
  }
}
