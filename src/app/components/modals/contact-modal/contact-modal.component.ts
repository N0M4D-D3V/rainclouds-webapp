import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "../../../common/global-constants";

@Component({
  selector: "app-contact-modal",
  templateUrl: "./contact-modal.component.html",
  styleUrls: ["./contact-modal.component.css"],
})
export class ContactModalComponent implements OnInit {
  instagram: string = GlobalConstants.INSTAGRAM_URL;
  facebook: string = GlobalConstants.FACEBOOK_URL;

  constructor() {}

  ngOnInit() {}
}
