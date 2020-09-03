import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class RecipeService {
	private App_Id = "8064ea95";
	private App_Key = "ddf7ba4dbd5b106269e7466af267ce12";
	Searched: string = "";
	DataDetailsArray: any[];
	constructor(private http: HttpClient) {}
	serSearched(data: string) {
		this.Searched = data;
	}
	getRecipe() {
		return this.http.get<{ hits: any[] }>(
			`https://api.edamam.com/search?q=${this.Searched}&app_id=${this.App_Id}&app_key=${this.App_Key}`,
		);
	}
	setData(data: any[]) {
		this.DataDetailsArray = data;
	}
	getData() {
		return this.DataDetailsArray;
	}
}
