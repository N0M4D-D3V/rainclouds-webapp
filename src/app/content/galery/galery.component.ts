import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  imagesData = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getAllImages()
    .subscribe((response) => this.imagesData = response);
  }


}
