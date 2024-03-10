import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit  {
  public recipes: Recipe[];

  public constructor(
      private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  public ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipesUpdated.subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

  public onNewRecipe() {
    this.router.navigate(["new"], {relativeTo: this.route})
  }
}
