import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { renderImage } from "../common/utils";
import { Image } from "../interfaces/image";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  constructor(private firestore: AngularFirestore) {}

  getImage(documentId: string): Observable<Image> {
    return this.firestore
      .collection<Image>("images")
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return renderImage(response);
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
            return renderImage(item);
          });
        })
      );
  }
}