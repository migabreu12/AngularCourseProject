import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    public recipe: Recipe;
    public id: number;

    public constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.recipe = data["recipe"];
        });
    }

    public onAddToShoppingList(): void {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    public onEdit(): void {
        this.router.navigate(["edit"], {relativeTo: this.route});
    }
}