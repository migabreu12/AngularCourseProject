import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
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
      private recipeService: RecipeService
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
    console.log(this.recipeForm.value);
  }

  public onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients"))
      .push(new FormGroup({
        "name": new FormControl(),
        "amount": new FormControl()
      }));
  }

  private initForm() {
    let recipe = new Recipe("", "", "", []);
    let ingredientsFormArray = new FormArray([]);

    if(this.isEditMode) {
      recipe = this.recipeService.getRecipe(this.id);

      if(recipe.ingredients) {
        for(let ingredient of recipe.ingredients) {
          ingredientsFormArray.push(new FormGroup({
            "name": new FormControl(ingredient.name),
            "amount": new FormControl(ingredient.amount)
          }))
        }
      }
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(recipe.name, Validators.required),
      "description": new FormControl(recipe.description),
      "imagePath": new FormControl(recipe.imagePath, Validators.required),
      "ingredients": ingredientsFormArray
    });
  }
}
