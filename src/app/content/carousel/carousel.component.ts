import { Component, OnInit } from "@angular/core";
import { Carousel } from "src/app/models/carousel";
import { FirestoreService } from "../../services/firestore.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  carousel = new Array<Carousel>();

  constructor(private service: FirestoreService) {}

  ngOnInit() {
    this.service
      .getAllCarousels()
      .subscribe((response) => (this.carousel = response));
  }
}
