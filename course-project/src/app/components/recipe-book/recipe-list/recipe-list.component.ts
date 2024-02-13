import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit  {
  public recipes: Recipe[];

  public constructor(private recipeService: RecipeService) {}

  public ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
