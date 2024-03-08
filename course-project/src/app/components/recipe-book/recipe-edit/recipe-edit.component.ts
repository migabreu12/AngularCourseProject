import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  public isEditMode: boolean;
  public recipeForm: FormGroup;

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

  private initForm() {
    let recipe = new Recipe("", "", "", []);

    if(this.isEditMode) {
      recipe = this.recipeService.getRecipe(this.id);
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(recipe.name, Validators.required),
      "description": new FormControl(recipe.description),
      "imagePath": new FormControl(recipe.imagePath, Validators.required)
    });
  }
}
