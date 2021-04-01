import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//MATERIAL
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

//ENVIROMENT
import { environment } from '../environments/environment.prod';

//PIPES
import { FilterPipe } from './common/pipes/search.pipe';

//MODALS
import { ArtModalComponent } from './modals/art-modal/art-modal.component';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
import { MusicModalComponent } from './modals/music-modal/music-modal.component';
import { PlayOrBuyComponent } from './modals/play-or-buy/play-or-buy.component';
import { ProductionModalComponent } from './modals/production-modal/production-modal.component';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogComponent } from './components/content/catalog/catalog.component';
import { GaleryComponent } from './components/content/galery/galery.component';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { LyricsComponent } from './components/content/lyrics/lyrics.component';
import { BannerComponent } from './components/shared/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtModalComponent,
    ContactModalComponent,
    MusicModalComponent,
    PlayOrBuyComponent,
    ProductionModalComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    GaleryComponent,
    HomeComponent,
    LyricsComponent,
    AboutComponent,
    BannerComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
  entryComponents: [
    ArtModalComponent,
    ContactModalComponent,
    MusicModalComponent,
    PlayOrBuyComponent,
    ProductionModalComponent,
  ],
})
export class AppModule {}
