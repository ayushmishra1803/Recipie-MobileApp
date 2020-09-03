import { FoodDatabaseService } from "./../service/foodDataBase/food-database.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
	constructor() {}

	ngOnInit() {}
}

//https://api.edamam.com/api/food-database/v2/parser?ingr=pasta&app_id=4a81b8a2&app_key=b90f3fdd1001327868c2e516d83f8ef6
