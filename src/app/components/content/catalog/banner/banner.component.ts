import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public youtube: string = GlobalConstants.YOUTUBE_URL;
  public spotify: string = GlobalConstants.SPOTIFY_URL;
  public bandcamp: string = GlobalConstants.BANDCAMP_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
