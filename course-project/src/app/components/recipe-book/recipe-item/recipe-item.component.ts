import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  public constructor(private recipeService: RecipeService) {}
  
  public emitSelectedRecipe(): void {
    // I don't agree with using an emitter as a property on a servicee. A method should handle triggering the emitter, not directly.
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
