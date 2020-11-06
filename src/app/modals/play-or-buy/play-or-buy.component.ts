import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-play-or-buy",
  templateUrl: "./play-or-buy.component.html",
  styleUrls: ["./play-or-buy.component.css"],
})
export class PlayOrBuyComponent implements OnInit {
  bandcampLink: string;
  spotifyLink: string;
  themeTitle: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.themeTitle = data.pageValue.payload.doc.data().description;
    this.spotifyLink = data.pageValue.payload.doc.data().playLink;
    this.bandcampLink = data.pageValue.payload.doc.data().buyLink;
  }

  ngOnInit() {}
}
