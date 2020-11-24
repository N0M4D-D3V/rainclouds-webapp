import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";
import { PlayOrBuyComponent } from "../../modals/play-or-buy/play-or-buy.component";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
})
export class CatalogComponent implements OnInit {
  products: Array<Product>;
  displayedColumns: string[] = ["imgLink", "description", "options"];

  constructor(private service: ProductService, private dialog: MatDialog) {}

  ngOnInit() {
    this.service.getAllProducts().subscribe((response) => {
      this.products = response.sort((a, b) => (a.order < b.order ? -1 : 1));
    });
  }

  openPlayOrBuyDialog(product): void {
    this.dialog.open(PlayOrBuyComponent, {
      data: { pageValue: product },
      autoFocus: false,
    });
  }
}
