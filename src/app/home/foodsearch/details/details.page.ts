import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { FoodDatabaseService } from "./../../../service/foodDataBase/food-database.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-details",
	templateUrl: "./details.page.html",
	styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit, OnDestroy {
	constructor(
		private service: FoodDatabaseService,
		private router: Router,
		private control: LoadingController,
	) {}
	ngOnDestroy(): void {
		this.dataSub.unsubscribe();
	}
	dataobs = new Observable<{ hints: any[]; parsed: any[] }>();
	DataHint: any[] = [];
	dataSub = new Subscription();
	Dataparsed: any[] = [];

	ngOnInit() {
		this.control.create({keyboardClose:true,message:"Loading"}).then(res=>{
			res.present();
			this.dataobs = this.service.getFoodFromDatabase();
			this.dataSub = this.dataobs.subscribe((re) => {
				console.log(re + "relog");
				this.DataHint = re.hints;
				this.Dataparsed = re.parsed;
				console.log(this.Dataparsed);

				console.log(this.DataHint);
				res.dismiss();
			});
		})
		
	}
	details(data: any[]) {
		this.service.setDetails(data);
		this.router.navigate(["//home/tabs/foodsearch/details/fooddetails"]);
	}
}
