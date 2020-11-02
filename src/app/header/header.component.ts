import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ArtModalComponent } from "../modals/art-modal/art-modal.component";
import { ContactModalComponent } from "../modals/contact-modal/contact-modal.component";
import { MusicModalComponent } from "../modals/music-modal/music-modal.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

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

  openContactDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(ContactModalComponent, dialogConfig);
  }
}
