import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-play-or-buy",
  templateUrl: "./play-or-buy.component.html",
  styleUrls: ["./play-or-buy.component.css"],
})
export class PlayOrBuyComponent implements OnInit {
  bandcampLink: string;
  spotifyLink: string;
  themeTitle: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
    this.themeTitle = data.description;
    this.spotifyLink = data.playLink;
    this.bandcampLink = data.buyLink;
  }

  ngOnInit() {}
}
