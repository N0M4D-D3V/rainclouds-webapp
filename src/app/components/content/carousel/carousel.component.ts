import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Carousel } from "src/app/models/carousel";
import { CarouselService } from "src/app/services/carousel.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  carousel: Array<Carousel>;

  constructor(
    private service: CarouselService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.service.getAllCarousels().subscribe((response) => {
        this.carousel = response;
      });
    });
    this.changeDetector.detectChanges();
  }
}
