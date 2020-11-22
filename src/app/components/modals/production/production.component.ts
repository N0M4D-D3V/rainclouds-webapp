import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "../../../common/global-constants";

@Component({
  selector: "app-production",
  templateUrl: "./production.component.html",
  styleUrls: ["./production.component.css"],
})
export class ProductionComponent implements OnInit {
  //wildcrow
  wildCrowFacebook: string = GlobalConstants.WILDCROW_STUDIOS_FACEBOOK;

  //dark void
  darkVoidWeb: string = GlobalConstants.DARK_VOID_STUDIOS_WEB;
  darkVoidFacebook: string = GlobalConstants.DARK_VOID_STUDIOS_FACEBOOK;
  darkVoidInstagram: string = GlobalConstants.DARK_VOID_STUDIOS_INSTAGRAM;
  darkVoidYoutube: string = GlobalConstants.DARK_VOID_STUDIOS_YOUTUBE;

  constructor() {}

  ngOnInit() {}
}
