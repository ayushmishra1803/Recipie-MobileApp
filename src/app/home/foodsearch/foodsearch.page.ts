import { Router } from "@angular/router";
import { FoodDatabaseService } from "./../../service/foodDataBase/food-database.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector: "app-foodsearch",
	templateUrl: "./foodsearch.page.html",
	styleUrls: ["./foodsearch.page.scss"],
})
export class FoodsearchPage implements OnInit {
	constructor(private service: FoodDatabaseService, private Router: Router) {}

	ngOnInit() {}
	onSubmit(f: NgForm) {
		console.log("hello");
		this.service.setIngredients(f.value.searched);
		this.Router.navigate(["/home/tabs/foodsearch/details"]);
	}
}
