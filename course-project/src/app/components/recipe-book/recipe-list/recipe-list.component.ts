import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'This is a test recipe',
      description: 'This is a test description',
      imagePath: 'https://hostthetoast.com/wp-content/uploads/2019/02/Garlic-Butter-Ribeye-Steak-and-Potatoes-6.jpg'
    }
  ];

  ngOnInit(): void {
  }
}
