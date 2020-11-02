import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "../../common/global-constants";

@Component({
  selector: "app-art-modal",
  templateUrl: "./art-modal.component.html",
  styleUrls: ["./art-modal.component.css"],
})
export class ArtModalComponent implements OnInit {
  instagram: string = GlobalConstants.INSTAGRAM_URL;
  //alvaro
  alvaroGomezFacebook: string = GlobalConstants.ALVARO_GOMEZ_FACEBOOK;
  alvaroGomezInstagram: string = GlobalConstants.ALVARO_GOMEZ_INSTAGRAM;

  //steel witch
  steelWitchInstagram: string = GlobalConstants.STEEL_WITCH_INSTAGRAM;

  constructor() {}

  ngOnInit() {}
}
