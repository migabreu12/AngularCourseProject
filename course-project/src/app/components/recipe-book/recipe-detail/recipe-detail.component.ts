import { Component, Input } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.scss']
})
export class RecipeDetailComponent {
    @Input() recipe: Recipe;

    public constructor(private recipeService: RecipeService) {}

    public onAddToShoppingList(): void {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}