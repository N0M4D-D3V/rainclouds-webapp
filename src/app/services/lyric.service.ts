import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { renderLyric } from "../common/utils";
import { Lyric } from "../interfaces/lyric";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: "root",
})
export class LyricService {
  constructor(private firestore: AngularFirestore) {}

  getLyric(documentId: string): Observable<Lyric> {
    return this.firestore
      .collection<Lyric>("lyrics")
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return renderLyric(response);
        })
      );
  }

  getAllLyrics(): Observable<Lyric[]> {
    return this.firestore
      .collection<Lyric[]>("lyrics")
      .snapshotChanges()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return renderLyric(item);
          });
        })
      );
  }
}