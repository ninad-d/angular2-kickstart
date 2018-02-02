import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 100),
    new Ingredient('Tomatoes', 50),
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngrediebntAdded(i: Ingredient) {
    this.ingredients.push(i);
  }

}