
import { Component, OnInit } from "@angular/core";
import { delay, startWith } from "rxjs/operators";
import { shuffle } from "src/app/common/utils";
import { Image } from "src/app/interfaces/image";
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.scss"],
})
export class GaleryComponent implements OnInit {
  public bannerImg: string = "https://imgur.com/VvyKjio.jpg"
  public type:string = "GALLERY";
  
  public imagesData: Array<Image> = new Array<Image>();

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.service
      .getAllImages()
      .pipe(startWith(null), delay(0))
      .subscribe((response) => (this.imagesData = shuffle(response? response: new Array<Image>())));
  }
}