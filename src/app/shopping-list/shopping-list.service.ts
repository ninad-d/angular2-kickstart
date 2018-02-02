import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient [] =  [
        new Ingredient('Apples', 100),
        new Ingredient('Tomatoes', 50),
    ];

    addIngredient (i: Ingredient) {
        this.ingredients.push(i);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredientsList () {
        return  this.ingredients.slice();
    }

    addIngredients (ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}