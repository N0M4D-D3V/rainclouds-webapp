import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { renderProduct } from "../common/utils";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  getProduct(documentId: string): Observable<Product> {
    return this.firestore
      .collection<Product>("products")
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return renderProduct(response);
        })
      );
  }

  getAllProducts(): Observable<Product[]> {
    return this.firestore
      .collection<Product[]>("products")
      .snapshotChanges()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return renderProduct(item);
          });
        })
      );
  }
}
