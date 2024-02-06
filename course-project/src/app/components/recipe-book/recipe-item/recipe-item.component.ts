import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>;
  
  public emitRecipeSelected(): void {
    this.recipeSelected.emit(this.recipe);
  }
}
