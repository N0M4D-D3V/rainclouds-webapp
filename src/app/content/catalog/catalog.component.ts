import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "../../services/firestore.service";
import { MatDialog } from "@angular/material";
import { PlayOrBuyComponent } from "src/app/modals/play-or-buy/play-or-buy.component";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
})
export class CatalogComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ["imgLink", "description", "options"];

  constructor(
    private firestoreService: FirestoreService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.firestoreService.getAllProducts().subscribe((response: any) => {
      this.products = response.sort((a, b) =>
        a.payload.doc.data().order < b.payload.doc.data().order ? -1 : 1
      );
    });
  }

  openPlayOrBuyDialog(product): void {
    this.dialog.open(PlayOrBuyComponent, {
      data: { pageValue: product },
      autoFocus: false,
    });
  }
}
