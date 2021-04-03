export interface Lyric {
  id?: string;
  songName: string;
  cdName: string;
  author: string;
  paragraphs: Paragraph[];
  songLink: string;
}

export interface Paragraph {
  lines: string[];
}

// single floor line _ === line ||| a 3 line --- === paragraph
