import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  GlobalConstants,
  BannerImages,
} from '../../../common/global-constants';
import { MailModalComponent } from '../../shared/modals/mail-modal/mail-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public type: string = 'about';
  public bannerImg: string = BannerImages.BANNER_IMG_ABOUT;

  //links
  public steelWitchInstagram: string = GlobalConstants.STEEL_WITCH_INSTAGRAM;
  public alvaroGomezFacebook: string = GlobalConstants.ALVARO_GOMEZ_FACEBOOK;
  public alvaroGomezInstagram: string = GlobalConstants.ALVARO_GOMEZ_INSTAGRAM;
  public victorDevelopsLinkedin: string =
    GlobalConstants.VICTOR_DEVELOPS_LINKEDIN;
  public darkVoidStudiosWeb: string = GlobalConstants.DARK_VOID_STUDIOS_WEB;
  public wildCrowStudiosFacebook: string =
    GlobalConstants.WILDCROW_STUDIOS_FACEBOOK;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openMailDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    this.dialog.open(MailModalComponent, dialogConfig);
  }
}
