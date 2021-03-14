import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-sentences",
  templateUrl: "./sentences.component.html",
  styleUrls: ["./sentences.component.css"],
})
export class SentencesComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
