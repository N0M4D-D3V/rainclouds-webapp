import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";

//MATERIAL
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';

import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

//ENVIROMENT
import { environment } from '../environments/environment.prod';

//MODALS
import { ArtModalComponent } from './modals/art-modal/art-modal.component';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
import { MusicModalComponent } from './modals/music-modal/music-modal.component';
import { PlayOrBuyComponent } from './modals/play-or-buy/play-or-buy.component';
import { ProductionModalComponent } from './modals/production-modal/production-modal.component';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { CarouselComponent } from './components/content/components/carousel/carousel.component';
import { CatalogComponent } from './components/content/components/catalog/catalog.component';
import { GaleryComponent } from './components/content/components/galery/galery.component';
import { SentencesComponent } from './components/content/components/sentences/sentences.component';

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
    ContentComponent,
    CarouselComponent,
    CatalogComponent,
    GaleryComponent,
    SentencesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
  entryComponents: [
    ArtModalComponent,
    ContactModalComponent,
    MusicModalComponent,
    PlayOrBuyComponent,
    ProductionModalComponent
  ]
})
export class AppModule { }
