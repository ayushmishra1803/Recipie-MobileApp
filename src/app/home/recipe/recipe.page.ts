import { Router } from "@angular/router";
import { RecipeService } from "./../../service/recipe/recipe.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-recipe",
	templateUrl: "./recipe.page.html",
	styleUrls: ["./recipe.page.scss"],
})
export class RecipePage implements OnInit {
	constructor(private service: RecipeService, private router: Router) {}

	ngOnInit() {}

	onSubmit(f: NgForm) {
		this.service.serSearched(f.value.searched);
		this.router.navigate(["/home/tabs/recipe/recipe-details"]);
	}
}
