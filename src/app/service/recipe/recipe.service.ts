import { Injectable } from '@angular/core';

@Injectable({
	providedIn: "root",
})
export class RecipeService {
	private App_Id = "8064ea95";
  private App_Key = "ddf7ba4dbd5b106269e7466af267ce12";
  Searched:string="";
  constructor() {}
  serSearched(data:string){
    this.Searched=data;
  }
}
