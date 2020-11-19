import { Component, OnInit } from "@angular/core";
import { Image } from "src/app/models/image";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.css"],
})
export class GaleryComponent implements OnInit {
  imagesData = new Array<Image>();

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.service
      .getAllImages()
      .subscribe((response) => (this.imagesData = response));
  }
}
