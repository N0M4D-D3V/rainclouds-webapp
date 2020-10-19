import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getAllProducts()
    .subscribe((response) => this.products = response);
  }

}
