import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class FoodDatabaseService {
	constructor(private http: HttpClient) {}
	FoodDatabseApp_id = "4a81b8a2";
	FoodDatabseKEy = "b90f3fdd1001327868c2e516d83f8ef6";
	Ingredients: string;
	setIngredients(data) {
		this.Ingredients = data;
	}
	getFoodFromDatabase() {
		return this.http.get(
			`https://api.edamam.com/api/food-database/v2/parser?ingr=${this.Ingredients}&app_id=${this.FoodDatabseApp_id}&app_key=${this.FoodDatabseKEy}`,
		);
	}
}
