import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  //Obtiene un product
  public getProduct(documentId: string) {
    return this.firestore.collection('products').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los products
  public getAllProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  //Obtiene un product
  public getImage(documentId: string) {
    return this.firestore.collection('images').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los products
  public getAllImages() {
    return this.firestore.collection('images').snapshotChanges();
  }
  public getCarousel(documentId: string) {
    return this.firestore.collection('carousel').doc(documentId).snapshotChanges();
  }
  public getAllCarousels() {
    return this.firestore.collection('carousel').snapshotChanges();
  }

}
