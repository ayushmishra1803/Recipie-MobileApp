import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-foodsearch",
  templateUrl: "./foodsearch.page.html",
  styleUrls: ["./foodsearch.page.scss"],
})
export class FoodsearchPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(f:NgForm) {
    console.log("hello");
  }
}
