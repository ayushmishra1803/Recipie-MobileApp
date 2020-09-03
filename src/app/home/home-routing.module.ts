import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";
const routes: Routes = [
	{
		path: "",
		redirectTo: "tabs/foodsearch",
	},
	{
		path: "tabs",
		component: HomePage,
		children: [
			{
				path: "foodsearch",
				loadChildren: () =>
					import("./foodsearch/foodsearch.module").then(
						(m) => m.FoodsearchPageModule,
					),
			},
			{
				path: "recipe",
				loadChildren: () =>
					import("./recipe/recipe.module").then((m) => m.RecipePageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomePageRoutingModule {}
