import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this is a test",
      "https://images.ctfassets.net/uexfe9h31g3m/1cnOikouN2MOQ6aUoAIagw/5cbe300e1a7b84ae9b195eeddfe4cd73/quorn-vegan-jamaican-fillets.jpg?w=1024&h=576&fm=jpg&fit=thumb&q=70&fl=progressive"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
