import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "../../../common/global-constants";

@Component({
  selector: "app-music-modal",
  templateUrl: "./music-modal.component.html",
  styleUrls: ["./music-modal.component.css"],
})
export class MusicModalComponent implements OnInit {
  youtube: string = GlobalConstants.YOUTUBE_URL;
  bandcamp: string = GlobalConstants.BANDCAMP_URL;
  spotify: string = GlobalConstants.SPOTIFY_URL;

  constructor() {}

  ngOnInit() {}
}
