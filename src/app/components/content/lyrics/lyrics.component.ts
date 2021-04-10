import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BannerImages } from 'src/app/common/global-constants';
import { Lyric } from 'src/app/interfaces/lyric';
import { LyricService } from 'src/app/services/lyric.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit, AfterViewInit {
  public bannerImg: string = BannerImages.BANNER_IMG_LYRICS;
  public type: string = 'LYRICS';

  private allLyrics: Lyric[] = new Array<Lyric>();
  public filteredLyrics: Lyric[] = new Array<Lyric>();

  constructor(
    private cdr: ChangeDetectorRef,
    private lyricService: LyricService
  ) {}

  ngOnInit(): void {
    this.lyricService.getAllLyrics().subscribe((response) => {
      this.allLyrics = response;
      this.filteredLyrics = response;
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredLyrics = this.allLyrics.filter(
      (lyric) =>
        lyric.songName
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase()) ||
        lyric.author
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase()) ||
        lyric.cdName
          .trim()
          .toLocaleLowerCase()
          .includes(filterValue.trim().toLocaleLowerCase())
    );
  }
}
