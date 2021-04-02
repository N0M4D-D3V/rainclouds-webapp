import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArtModalComponent } from 'src/app/components/shared/modals/art-modal/art-modal.component';
import { ContactModalComponent } from 'src/app/components/shared/modals/contact-modal/contact-modal.component';
import { MusicModalComponent } from 'src/app/components/shared/modals/music-modal/music-modal.component';
import { ProductionModalComponent } from 'src/app/components/shared/modals/production-modal/production-modal.component';
import { GlobalConstants } from "src/app/common/global-constants";
import { MailModalComponent } from '../shared/modals/mail-modal/mail-modal.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  //RAZAK
  youtube: string = GlobalConstants.YOUTUBE_URL;
  bandcamp: string = GlobalConstants.BANDCAMP_URL;
  instagram: string = GlobalConstants.INSTAGRAM_URL;
  facebook: string = GlobalConstants.FACEBOOK_URL;
  spotify: string = GlobalConstants.SPOTIFY_URL;
  twitter: string = GlobalConstants.TWITTER_URL;

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  public openMusicDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(MusicModalComponent, dialogConfig);
  }

  public openArtDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ArtModalComponent, dialogConfig);
  }

  public openProductionDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ProductionModalComponent, dialogConfig);
  }

  public openContactDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ContactModalComponent, dialogConfig);
  }

  public openMailDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(MailModalComponent, dialogConfig);
  }

}
