import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  public constructor(private recipeService: RecipeService) {}
  
  public emitSelectedRecipe(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
