import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./components/recipe-book/recipe-book.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list/shopping-list.component";
import { HomeComponent } from "./components/home/home.component";
import { RecipeDetailComponent } from "./components/recipe-book/recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./services/recipe-resolver.service";
import { RecipeNotSelectedComponent } from "./components/recipe-book/recipe-not-selected/recipe-not-selected.component";
import { RecipeEditComponent } from "./components/recipe-book/recipe-edit/recipe-edit.component";

const routes: Routes = [
    { path: "", component: HomeComponent, children: [
        {
            path: "recipe",
            component: RecipeBookComponent,
            children: [
                {
                    path: "new",
                    component: RecipeEditComponent
                },
                {
                    path: ":id",
                    component: RecipeDetailComponent,
                    resolve: {
                        recipe: RecipeResolverService
                    }
                },
                {
                    path: ":id/edit",
                    component: RecipeEditComponent
                },
                {
                    path: "",
                    pathMatch: "full",
                    component: RecipeNotSelectedComponent
                }
            ]
        },
        { path: "shopping-list", component: ShoppingListComponent }
    ]},
    { path: "**", redirectTo: "" }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}