import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { renderCarousel } from '../common/utils';
import { Carousel } from '../interfaces/carousel';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor(private firestore: AngularFirestore) {}

  getCarousel(documentId: string): Observable<Carousel> {
    return this.firestore
      .collection<Carousel>('carousel')
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return renderCarousel(response);
        })
      );
  }

  getAllCarousels(): Observable<Carousel[]> {
    return this.firestore
      .collection<Carousel[]>('carousel')
      .snapshotChanges()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return renderCarousel(item);
          });
        })
      );
  }
}
