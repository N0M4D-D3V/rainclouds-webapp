  
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArtModalComponent } from 'src/app/modals/art-modal/art-modal.component';
import { ContactModalComponent } from 'src/app/modals/contact-modal/contact-modal.component';
import { MusicModalComponent } from 'src/app/modals/music-modal/music-modal.component';
import { ProductionModalComponent } from 'src/app/modals/production-modal/production-modal.component';
import { GlobalConstants } from "../../common/global-constants";

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

  openMusicDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(MusicModalComponent, dialogConfig);
  }

  openArtDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ArtModalComponent, dialogConfig);
  }

  openProductionDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ProductionModalComponent, dialogConfig);
  }

  openContactDialog(): void {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ContactModalComponent, dialogConfig);
    
  }
}
