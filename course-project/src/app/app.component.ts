import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'course-project';
  public displayRecipeListFlag: boolean = true;
  public displayShoppingListFlag: boolean = false;

  public displayRecipeList() {
    this.displayRecipeListFlag = true;
    this.displayShoppingListFlag = false;
  }

  public displayShoppingList() {
    this.displayRecipeListFlag = false;
    this.displayShoppingListFlag = true;
  }
}
