import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy  {
  public recipes: Recipe[];
  private subscription: Subscription;

  public constructor(
      private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  public ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.subscription = this.recipeService.recipesUpdated.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  public onNewRecipe() {
    this.router.navigate(["new"], {relativeTo: this.route})
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
