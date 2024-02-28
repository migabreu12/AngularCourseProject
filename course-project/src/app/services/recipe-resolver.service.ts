import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../components/recipe-book/models/recipe.model";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";
import { inject } from "@angular/core";

export const RecipeResolverService: ResolveFn<Recipe> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe => {
    const recipeService = inject(RecipeService);
    return recipeService.getRecipe(route.params["id"]);
}