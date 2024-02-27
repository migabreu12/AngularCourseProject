import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./components/recipe-book/recipe-book.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list/shopping-list.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent, children: [
        { path: "recipe", component: RecipeBookComponent },
        { path: "shopping-list", component: ShoppingListComponent }
    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}