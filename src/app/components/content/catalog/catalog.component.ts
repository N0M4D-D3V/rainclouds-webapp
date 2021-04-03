import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayOrBuyComponent } from 'src/app/components/shared/modals/play-or-buy/play-or-buy.component';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { BannerImages } from 'src/app/common/global-constants';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, AfterViewInit {
  public bannerImg: string = BannerImages.BANNER_IMG_CATALOG;
  public type: string = 'CATALOG';

  private allProducts: Array<Product> = new Array<Product>();
  public filteredProducts: Product[] = new Array<Product>();
  public displayedColumns: string[] = ['imgLink', 'description', 'options'];

  constructor(
    private cdr: ChangeDetectorRef,
    private service: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((response) => {
      this.allProducts = response.sort((a, b) => (a.order < b.order ? -1 : 1));
      this.filteredProducts = this.allProducts;
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredProducts = this.allProducts.filter(
      (product) =>
        product.name
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase()) ||
        product.description
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase()) ||
        product.type
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase()) ||
        product.date
          .toString()
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase())
    );
  }

  public openPlayOrBuyDialog(product: Product): void {
    this.dialog.open(PlayOrBuyComponent, {
      data: { pageValue: product },
      autoFocus: false,
    });
  }
}
