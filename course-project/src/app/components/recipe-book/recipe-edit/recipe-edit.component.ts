import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  public isEditMode: boolean;

  public constructor(private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.isEditMode = params["id"] != null;
    });
  }
}
