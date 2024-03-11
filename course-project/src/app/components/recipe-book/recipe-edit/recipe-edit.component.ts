import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  public isEditMode: boolean;
  public recipeForm: FormGroup;

  // Implementing creating the getter for controls due to an angular update that broke example code
  get ingredientControls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  public constructor(
      private route: ActivatedRoute,
      private recipeService: RecipeService,
      private router: Router
    ) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.isEditMode = params["id"] != null;

      this.initForm();
    });
  }

  public onSubmit() {
    if(this.isEditMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  public onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients"))
      .push(new FormGroup({
        "name": new FormControl(null, Validators.required),
        "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }));
  }

  public onCancel() {
    this.router.navigate(["../", { relativeTo: this.route }]);
  }

  private initForm() {
    let recipe = new Recipe("", "", "", []);
    let ingredientsFormArray = new FormArray([]);

    if(this.isEditMode) {
      recipe = this.recipeService.getRecipe(this.id);

      if(recipe.ingredients) {
        for(let ingredient of recipe.ingredients) {
          ingredientsFormArray.push(new FormGroup({
            "name": new FormControl(ingredient.name, Validators.required),
            // Creating a reg exp can be done with two slashes like: /reg.exp/
            "amount": new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(recipe.name, Validators.required),
      "description": new FormControl(recipe.description, Validators.required),
      "imagePath": new FormControl(recipe.imagePath, Validators.required),
      "ingredients": ingredientsFormArray
    });
  }
}
