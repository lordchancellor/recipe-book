import { provideRouter } from '@angular/router';

import { RecipesComponent } from './recipes';
import { ShoppingListComponent } from './shopping-list';
import { RECIPE_ROUTES } from './recipes/recipes.routes';

export const APP_ROUTES_PROVIDERS = [
	provideRouter([
		{
			path: '',
			redirectTo: '/recipes',
			pathMatch: 'full'
		},
		{
			path: 'recipes',
			component: RecipesComponent,
			children: RECIPE_ROUTES
		},
		{
			path: 'shopping-list',
			component: ShoppingListComponent
		}
	])
];