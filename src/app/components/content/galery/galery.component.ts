import { Component, OnInit } from '@angular/core';
import { BannerImages } from 'src/app/common/global-constants';
import { shuffle } from 'src/app/common/utils';
import { Image } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {
  public bannerImg: string = BannerImages.BANNER_IMG_GALLERY;
  public type: string = 'GALLERY';

  public imagesData: Array<Image> = new Array<Image>();

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.service.getAllImages().subscribe((response) => {
      this.imagesData = shuffle(response ? response : new Array<Image>());
    });
  }
}
