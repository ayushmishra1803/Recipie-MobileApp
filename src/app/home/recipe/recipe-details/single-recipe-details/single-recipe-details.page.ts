import { RecipeService } from "./../../../../service/recipe/recipe.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-single-recipe-details",
	templateUrl: "./single-recipe-details.page.html",
	styleUrls: ["./single-recipe-details.page.scss"],
})
export class SingleRecipeDetailsPage implements OnInit {
	constructor(private service: RecipeService) {}

	data: any;
	ngOnInit() {
    this.data = this.service.getData();
    console.log(this.data);
    
	}
}
