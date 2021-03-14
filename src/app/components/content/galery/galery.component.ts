import { Component, OnInit } from "@angular/core";
import { delay, startWith } from "rxjs/operators";
import { shuffle } from "src/app/common/utils";
import { Image } from "src/app/models/image";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.css"],
})
export class GaleryComponent implements OnInit {
  imagesData: Array<Image>;

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.service
      .getAllImages()
      .pipe(startWith(null), delay(0))
      .subscribe((response) => (this.imagesData = shuffle(response)));
  }
}
