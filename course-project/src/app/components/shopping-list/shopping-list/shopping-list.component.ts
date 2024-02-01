import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    {
      name: "Apple",
      amount: 5
    },
    {
      name: "Tomatoes",
      amount: 10
    }
  ];

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
