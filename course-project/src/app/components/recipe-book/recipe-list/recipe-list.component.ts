import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit  {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>;

  public recipes: Recipe[];

  public constructor(private recipeService: RecipeService) {}

  public ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  public emitSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
