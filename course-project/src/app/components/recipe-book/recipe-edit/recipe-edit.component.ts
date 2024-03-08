import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

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

  private initForm() {
    if(this.isEditMode) {
      const recipeToEdit = this.recipeService.getRecipe(this.id);
      this.recipeForm = new FormGroup({
        "name": new FormControl(recipeToEdit.name, Validators.required),
        "description": new FormControl(recipeToEdit.description),
        "imagePath": new FormControl(recipeToEdit.imagePath, Validators.required)
      });
    } else {
      this.recipeForm = new FormGroup({
        "name": new FormControl(null, Validators.required),
        "description": new FormControl(null),
        "imagePath": new FormControl(null, Validators.required)
      });
    }
  }
}
