import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "../../common/global-constants";
import { version } from "../../../../package.json";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  //APP
  appVersion: string = version;

  //RAZAK
  youtube: string = GlobalConstants.YOUTUBE_URL;
  bandcamp: string = GlobalConstants.BANDCAMP_URL;
  instagram: string = GlobalConstants.INSTAGRAM_URL;
  facebook: string = GlobalConstants.FACEBOOK_URL;
  spotify: string = GlobalConstants.SPOTIFY_URL;
  twitter: string = GlobalConstants.TWITTER_URL;

  //alvaro
  alvaroGomezFacebook: string = GlobalConstants.ALVARO_GOMEZ_FACEBOOK;
  alvaroGomezInstagram: string = GlobalConstants.ALVARO_GOMEZ_INSTAGRAM;

  //steel witch
  steelWitchInstagram: string = GlobalConstants.STEEL_WITCH_INSTAGRAM;

  //bullet kid
  bulletKidInstagram: string = GlobalConstants.BULLET_KID_INSTAGRAM;

  //dark void studios
  darkVoidStudiosWeb: string = GlobalConstants.DARK_VOID_STUDIOS_WEB;
  darkVoidStudiosYoutube: string = GlobalConstants.DARK_VOID_STUDIOS_YOUTUBE;
  darkVoidStudiosInstagram: string =
    GlobalConstants.DARK_VOID_STUDIOS_INSTAGRAM;
  darkVoidStudiosFacebook: string = GlobalConstants.DARK_VOID_STUDIOS_FACEBOOK;

  //wildcrow studios
  wildCrowStudiosFacebook: string = GlobalConstants.WILDCROW_STUDIOS_FACEBOOK;

  //victor develops
  victorLinkedin: string = GlobalConstants.VICTOR_DEVELOPS_LINKEDIN;

  constructor() {}

  ngOnInit() {}
}
