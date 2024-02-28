import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    public recipe: Recipe;

    public constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.recipe = data["recipe"];
        });
    }

    public onAddToShoppingList(): void {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}