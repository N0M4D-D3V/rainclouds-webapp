import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

carousel;


  constructor(
    private service: FirestoreService
  ) { }

  ngOnInit() {
    this.service.getCarousel("fw8fzQ5ieHez41DxYPdT")
    .subscribe((response) => this.carousel = response);
    console.log(this.carousel)
  }

}
