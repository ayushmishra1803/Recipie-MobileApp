import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { RecipeService } from "./../../../service/recipe/recipe.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-recipe-details",
	templateUrl: "./recipe-details.page.html",
	styleUrls: ["./recipe-details.page.scss"],
})
export class RecipeDetailsPage implements OnInit {
	constructor(
		private service: RecipeService,
		private controler: LoadingController,
		private router: Router,
	) {}

	DataObs = new Observable<{ hits: any[] }>();
	DataSub = new Subscription();
	DataArray: any;
	ngOnInit() {
		this.controler
			.create({
				keyboardClose: true,
				message: "Recipe is on the way Please Wait.......",
			})
			.then((loader) => {
				loader.present();
				this.DataObs = this.service.getRecipe();
				this.DataSub = this.DataObs.subscribe((re) => {
					console.log(re);
					this.DataArray = re.hits;
					console.log(this.DataArray);
					loader.dismiss();
				});
			});
	}
	details(data: any[]) {
		this.service.setData(data);
		this.router.navigate([
			"/home/tabs/recipe/recipe-details/single-recipe-details",
		]);
	}
}
