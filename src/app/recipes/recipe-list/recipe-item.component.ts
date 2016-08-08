import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: [`
    img { width: 100px; }
    a.list-group-item { margin-bottom: 10px; }
  `],
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
