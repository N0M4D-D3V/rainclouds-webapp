import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getProduct(documentId: string) {
    return this.firestore
      .collection("products")
      .doc(documentId)
      .snapshotChanges();
  }

  getAllProducts() {
    return this.firestore.collection("products").snapshotChanges();
  }

  getImage(documentId: string) {
    return this.firestore
      .collection("images")
      .doc(documentId)
      .snapshotChanges();
  }

  getAllImages() {
    return this.firestore.collection("images").snapshotChanges();
  }

  getAllSentences() {
    return this.firestore.collection("sentences").snapshotChanges();
  }

  getCarousel(documentId: string) {
    return this.firestore
      .collection("carousel")
      .doc(documentId)
      .snapshotChanges();
  }

  getAllCarousels() {
    return this.firestore.collection("carousel").snapshotChanges();
  }
}
