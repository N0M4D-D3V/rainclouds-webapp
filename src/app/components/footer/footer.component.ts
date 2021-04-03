import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public widthIcon: number = 150;

  //RAZAK
  public youtube: string = GlobalConstants.YOUTUBE_URL;
  public bandcamp: string = GlobalConstants.BANDCAMP_URL;
  public instagram: string = GlobalConstants.INSTAGRAM_URL;
  public facebook: string = GlobalConstants.FACEBOOK_URL;
  public spotify: string = GlobalConstants.SPOTIFY_URL;
  public twitter: string = GlobalConstants.TWITTER_URL;

  constructor() {}

  ngOnInit() {}
}
