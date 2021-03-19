import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-sentences",
  templateUrl: "./sentences.component.html",
  styleUrls: ["./sentences.component.scss"]
})
export class SentencesComponent implements OnInit, AfterViewInit {

  constructor(
    private cdr: ChangeDetectorRef,
    public carouselConfig: NgbCarouselConfig
    ) {
    carouselConfig.interval = 2000;
    carouselConfig.keyboard = true;
    carouselConfig.pauseOnHover = true;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}