import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GlobalConstants } from 'src/app/common/global-constants';
import { ArtModalComponent } from 'src/app/modals/art-modal/art-modal.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() type: string;
  @Input() imageSrc: string;

  public youtube: string = GlobalConstants.YOUTUBE_URL;
  public spotify: string = GlobalConstants.SPOTIFY_URL;
  public bandcamp: string = GlobalConstants.BANDCAMP_URL;
  public instagram: string = GlobalConstants.INSTAGRAM_URL;
  public facebook: string = GlobalConstants.FACEBOOK_URL;
  public twitter: string = GlobalConstants.TWITTER_URL;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openArtDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ArtModalComponent, dialogConfig);
  }
}
