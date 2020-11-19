import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Carousel } from "../models/carousel";
import { Image } from "../models/image";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getProduct(documentId: string): Observable<Product> {
    return this.firestore
      .collection<Product>("products")
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return this.processProduct(response);
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
            return this.processProduct(item);
          });
        })
      );
  }

  getImage(documentId: string): Observable<Image> {
    return this.firestore
      .collection<Image>("images")
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return this.processImage(response);
        })
      );
  }

  getAllImages(): Observable<Image[]> {
    return this.firestore
      .collection<Image[]>("images")
      .snapshotChanges()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return this.processImage(item);
          });
        })
      );
  }

  getCarousel(documentId: string): Observable<Carousel> {
    return this.firestore
      .collection<Carousel>("carousel")
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return this.processCarousel(response);
        })
      );
  }

  getAllCarousels(): Observable<Carousel[]> {
    return this.firestore
      .collection<Carousel[]>("carousel")
      .snapshotChanges()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return this.processCarousel(item);
          });
        })
      );
  }

  private processProduct(item): Product {
    const product = item.payload.doc.data() as Product;
    product.id = item.payload.doc.id;
    return product;
  }

  private processImage(item): Image {
    const image = item.payload.doc.data() as Image;
    image.id = item.payload.doc.id;
    return image;
  }

  private processCarousel(item): Carousel {
    const carousel = item.payload.doc.data() as Carousel;
    carousel.id = item.payload.doc.id;
    return carousel;
  }
}
