import { RecipeService } from "./../../../../service/recipe/recipe.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-single-recipe-details",
  templateUrl: "./single-recipe-details.page.html",
  styleUrls: ["./single-recipe-details.page.scss"],
})
export class SingleRecipeDetailsPage implements OnInit {
  constructor(private service: RecipeService) {}
  dailyclick: number = 0;
  nutrientclick: number = 0;
  totaldaily: boolean = null;
  totalnutrient: boolean = null;
  data: any;
  ngOnInit() {
    this.data = this.service.getData();
    console.log(this.data);
  }
  expandtotaldaily() {
    this.dailyclick = this.dailyclick + 1;
    if (this.dailyclick % 2 === 0) {
      this.totaldaily = true;
      this.totalnutrient = false;
    } else {
      this.totaldaily = false;
    }
  }
  expandtotalnutrient() {
    this.nutrientclick = this.nutrientclick + 1;
    if (this.nutrientclick % 2 === 0) {
      this.totaldaily = false;
      this.totalnutrient = true;
    } else {
      this.totalnutrient = false;
    }
  }
}
