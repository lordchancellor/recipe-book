import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pizza Napoletana', 'A classic napolean treat', 'http://www.roadtvitalia.it/wp-content/uploads/2015/02/pizza-napoletana.jpg', [
      new Ingredient('Pizza Dough', 1),
      new Ingredient('Tomato Base', 1),
      new Ingredient('Mozzerella', 5),
      new Ingredient('Fresh Basil', 10)
    ]),
    new Recipe('Beef Chilli Burrito', 'Classic Mexican street food, straight to your face!', 'http://www.cbc.ca/bestrecipes/content/images/recipes/chicken_chili_burritos-thumb-540x303-121416.jpg', []),
    new Recipe('Curry Platter', 'A selection of wonderful, aromatic, spicy curries', 'http://i.telegraph.co.uk/multimedia/archive/02710/Curry_2710104b.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
