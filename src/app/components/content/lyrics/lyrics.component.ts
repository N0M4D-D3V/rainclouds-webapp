import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BannerImages } from 'src/app/common/global-constants';
import { Lyric } from 'src/app/interfaces/lyric';
import { LyricService } from '../../../services/lyric.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit, AfterViewInit {
  public bannerImg: string = BannerImages.BANNER_IMG_CATALOG;
  public type: string = 'LYRICS';

  public lyrics: Lyric[] = new Array<Lyric>();

  constructor(
    private cdr: ChangeDetectorRef,
    private lyricService: LyricService
  ) {}

  ngOnInit(): void {
    this.lyricService
      .getAllLyrics()
      .subscribe((response) => (this.lyrics = response));
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
