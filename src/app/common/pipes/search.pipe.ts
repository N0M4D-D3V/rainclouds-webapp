import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    console.log(items);
    console.log(searchText);
    return items.filter((it) => {
      return it.songName.toLocaleLowerCase().includes(searchText);
    });
  }
}
