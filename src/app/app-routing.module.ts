import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { CatalogComponent } from './components/content/catalog/catalog.component';
import { GaleryComponent } from './components/content/galery/galery.component';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { LyricsComponent } from './components/content/lyrics/lyrics.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GaleryComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'lyrics', component: LyricsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
