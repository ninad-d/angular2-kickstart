import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('test recipe', 'test', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg')];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelect(r: Recipe) {
    this.recipeWasSelected.emit(r);
  }
}
