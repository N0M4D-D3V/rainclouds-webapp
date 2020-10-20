import { Component, OnInit } from "@angular/core";
import { MatCarousel, MatCarouselComponent } from "@ngmodule/material-carousel";
import { FirestoreService } from "src/app/services/firestore.service";

@Component({
  selector: "app-sentences",
  templateUrl: "./sentences.component.html",
  styleUrls: ["./sentences.component.css"],
})
export class SentencesComponent implements OnInit {
  sentences = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService
      .getAllSentences()
      .subscribe((response) => (this.sentences = response));
  }
}
