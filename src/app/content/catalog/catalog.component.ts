import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[] = [
    new Product(),
    new Product(),
    new Product()
  ];

  constructor() { }

  ngOnInit() {
  }

}
