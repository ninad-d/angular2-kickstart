import { Injectable, EventEmitter } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingList: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
            'test recipe', 
            'test', 
            'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg', 
            [
                new Ingredient('meat', 1),
                new Ingredient('fries', 20),
            ]

        ) 
    ];

    getRecipes () {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingList.addIngredients(ingredients);
    }
}