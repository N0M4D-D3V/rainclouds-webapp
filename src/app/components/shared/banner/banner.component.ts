import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GlobalConstants } from 'src/app/common/global-constants';
import { ArtModalComponent } from 'src/app/components/shared/modals/art-modal/art-modal.component';
import { ContactModalComponent } from 'src/app/components/shared/modals/contact-modal/contact-modal.component';
import { ProductionModalComponent } from 'src/app/components/shared/modals/production-modal/production-modal.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() type: string;
  @Input() imageSrc: string;
  @Input() invert?: boolean = false;

  public youtube: string = GlobalConstants.YOUTUBE_URL;
  public spotify: string = GlobalConstants.SPOTIFY_URL;
  public bandcamp: string = GlobalConstants.BANDCAMP_URL;
  public instagram: string = GlobalConstants.INSTAGRAM_URL;
  public facebook: string = GlobalConstants.FACEBOOK_URL;
  public twitter: string = GlobalConstants.TWITTER_URL;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openInfoDialog(): void {
    switch (this.type.toUpperCase()) {
      case 'CATALOG':
        this.openProductionDialog();
        return;
      case 'GALLERY':
        this.openArtDialog();
        return;
      case 'ABOUT':
        this.openContactDialog();
        return;
      case 'LYRICS':
        this.openContactDialog();
        return;
    }
  }

  private openArtDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ArtModalComponent, dialogConfig);
  }

  private openProductionDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ProductionModalComponent, dialogConfig);
  }

  private openContactDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ContactModalComponent, dialogConfig);
  }
}
