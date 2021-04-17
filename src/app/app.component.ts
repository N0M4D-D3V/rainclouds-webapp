import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('RazaK BlacK MetaL');
    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'Razak, Black Metal, Post Black Metal, Atmospheric, Eclipse, Rainclouds, Necrolove, Cradle of Filth, Burzum, Lustre',
      },
      {
        name: 'description',
        content:
          "Razak Black Metal. An Atmospheric/Post Black Metal band from Spain. Listen to RazaK music and contact with us! IT'S NOT ABOUT DEATH. IT'S ABOUT SUFFERING.",
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
